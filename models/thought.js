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
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    userId: String,
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(() => {
  return typeof this.reactions;
});

// thoughtSchema.virtual("friendlyDate").get(() => {
//   // use a getter method to format createdAt on query
//   return this.createdAt.toLocaleString("en-us", {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// });

// reactionSchema.virtual("friendlyDate").get(() => {
//   // use a getter method to format createdAt on query
//   return this.createdAt.toLocaleString("en-us", {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// });

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
