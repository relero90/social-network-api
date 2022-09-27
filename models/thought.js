const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.methods.reactionCount = function () {
  return this.reactions.length;
};

thoughtSchema.virtual("friendlyDate").get(() => {
  // use a getter method to format createdAt on query
  return this.createdAt.toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
