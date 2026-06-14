const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const topics = require("./data/topics");
const Tracker = require("./models/Tracker");
const { ensureUserKey, getTracker, buildTopicState } = require("./utils/tracker");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/dsa-tracker";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  res.locals.currentYear = new Date().getFullYear();
  next();
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/", async (req, res, next) => {
  try {
    const userKey = ensureUserKey(req, res);
    const tracker = await getTracker(userKey);
    const state = buildTopicState(new Set(tracker.completedQuestionIds));

    if (state.stats.complete) {
      return res.redirect("/complete");
    }

    res.render("home", {
      pageTitle: "DSA Tracker",
      topics: state.topics,
      stats: state.stats
    });
  } catch (error) {
    next(error);
  }
});

app.get("/complete", async (req, res, next) => {
  try {
    const userKey = ensureUserKey(req, res);
    const tracker = await getTracker(userKey);
    const state = buildTopicState(new Set(tracker.completedQuestionIds));

    if (!state.stats.complete) {
      return res.redirect("/");
    }

    res.render("complete", {
      pageTitle: "Journey Complete",
      stats: state.stats
    });
  } catch (error) {
    next(error);
  }
});

app.get("/topic/:slug", async (req, res, next) => {
  try {
    const topic = topics.find((entry) => entry.slug === req.params.slug);

    if (!topic) {
      return res.status(404).render("404", { pageTitle: "Topic Not Found" });
    }

    const userKey = ensureUserKey(req, res);
    const tracker = await getTracker(userKey);
    const state = buildTopicState(new Set(tracker.completedQuestionIds));
    const currentTopic = state.topics.find((entry) => entry.slug === topic.slug);

    res.render("topic", {
      pageTitle: `${currentTopic.name} | DSA Tracker`,
      topic: currentTopic,
      stats: state.stats
    });
  } catch (error) {
    next(error);
  }
});

app.post("/topic/:slug/toggle", async (req, res, next) => {
  try {
    const topic = topics.find((entry) => entry.slug === req.params.slug);

    if (!topic) {
      return res.status(404).render("404", { pageTitle: "Topic Not Found" });
    }

    const questionId = req.body.questionId;
    const questionExists = topic.questions.some((question) => question.id === questionId);

    if (!questionExists) {
      return res.redirect(`/topic/${topic.slug}`);
    }

    const userKey = ensureUserKey(req, res);
    const tracker = await getTracker(userKey);
    const completedSet = new Set(tracker.completedQuestionIds);

    if (completedSet.has(questionId)) {
      completedSet.delete(questionId);
    } else {
      completedSet.add(questionId);
    }

    await Tracker.updateOne(
      { userKey },
      { $set: { completedQuestionIds: [...completedSet] } },
      { upsert: true }
    );

    const state = buildTopicState(completedSet);

    if (state.stats.complete) {
      return res.redirect("/complete");
    }

    res.redirect(`/topic/${topic.slug}`);
  } catch (error) {
    next(error);
  }
});

app.post("/reset", async (req, res, next) => {
  try {
    const userKey = ensureUserKey(req, res);
    await Tracker.updateOne(
      { userKey },
      { $set: { completedQuestionIds: [] } },
      { upsert: true }
    );

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).render("500", { pageTitle: "Something Went Wrong" });
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
