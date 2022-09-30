const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.ObjectId,
      default: () => {
        return new mongoose.Types.ObjectId();
      },
    },
    _id: { id: false },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
    },
  },
  {
    runGettersOnQuery: true,
    toJSON: {
      getters: true,
    },
    toObject: {
      getters: true,
    },
  }
);

// use a getter method to format createdAt on query
function formatDate(createdAt) {
  return createdAt.toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}

module.exports = reactionSchema;
