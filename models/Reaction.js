const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: ObjectId,
    default: new ObjectId(),
  },
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
    default: Date.now,
    // use a getter method to format the timestamp on query
  },
});

module.exports = reactionSchema;
