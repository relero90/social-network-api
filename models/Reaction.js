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
    // use a getter method for format the timestamp on query
  },
});

// to be used as the reaction field's subdocument schema in the Thought model
module.exports = reactionSchema;
