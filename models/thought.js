const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: ObjectId,
    default: new ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    // 280 character maximum
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // use a getter method to format the timestamp on query
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    // validate between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.methods.reactionCount = function () {
  return this.reactions.length;
};

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
