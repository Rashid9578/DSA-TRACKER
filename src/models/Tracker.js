const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema(
  {
    userKey: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    completedQuestionIds: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tracker", trackerSchema);
