const crypto = require("crypto");
const topics = require("../data/topics");
const Tracker = require("../models/Tracker");

const totalQuestions = topics.reduce((sum, topic) => sum + topic.questions.length, 0);

function ensureUserKey(req, res) {
  let userKey = req.cookies?.dsaTrackerUser;

  if (!userKey) {
    userKey = crypto.randomUUID();
    res.cookie("dsaTrackerUser", userKey, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
  }

  return userKey;
}

async function getTracker(userKey) {
  let tracker = await Tracker.findOne({ userKey }).lean();

  if (!tracker) {
    tracker = await Tracker.create({ userKey, completedQuestionIds: [] });
    return tracker.toObject();
  }

  return tracker;
}

function buildTopicState(completedSet) {
  const topicCards = topics.map((topic) => {
    const completedCount = topic.questions.filter((question) => completedSet.has(question.id)).length;
    const total = topic.questions.length;

    return {
      ...topic,
      completedCount,
      total,
      progress: total ? Math.round((completedCount / total) * 100) : 0,
      done: completedCount === total,
      questions: topic.questions.map((question) => ({
        ...question,
        done: completedSet.has(question.id)
      }))
    };
  });

  const completedQuestions = topicCards.reduce((sum, topic) => sum + topic.completedCount, 0);
  const progress = totalQuestions ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

  return {
    topics: topicCards,
    stats: {
      completedQuestions,
      totalQuestions,
      progress,
      complete: completedQuestions === totalQuestions
    }
  };
}

module.exports = {
  ensureUserKey,
  getTracker,
  buildTopicState
};
