const mongoose = require("mongoose");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validateEmail, "Please enter a valid email address."],
    match: [emailRegex, "Please enter a valid email address."],
  },
  thoughts: {
    // array of _id values referencing the Thought model
  },
  friends: {
    // array of _id values referencing the User model (self-reference)
  },
});

userSchema.methods.friendCount = function () {
  return this.friends.length;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
