const { Thought, User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    // GET all users
    const data = await User.find();
    console.log(data);
    if (!data) {
      res.status(500).json({ message: "Something went wrong..." });
    }
    res.status(200).json(data);
  },

  async createUser(req, res) {
    // POST a new user: req.body -->
    // {
    //    "username": "lernantino",
    //    "email": "lernantino@gmail.com"
    // }
    const newUser = await User.create(req.body);
    if (!newUser) {
      res.status(500).json({ message: "Something went wrong..." });
    }
    res.status(200).json(newUser);
  },

  async getOneUser(req, res) {
    // GET a single user by its _id and populated thought and friend data
    const selectedUser = await User.findOne({ _id: req.params.id });
    if (!selectedUser) {
      res.status(404).json({ message: "No user found with that ID." });
    }
    res.status(200).json(selectedUser);
  },

  async updateOneUser(req, res) {
    // PUT to update a user by its _id
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "No user found with that ID." });
    }
    res.status(200).json(updatedUser);
  },

  async deleteOneUser(req, res) {
    // DELETE to remove user by its _id
    const wreckage = await User.deleteOne({ _id: req.params.id });
    !wreckage
      ? res.status(404).json({ message: "No user found with that ID." })
      : // BONUS --> remove a user's associated thoughts when deleted
        Thought.deleteMany({ _id: { $in: wreckage.thoughts } });

    res.status(200).json({ message: "User and user's thoughts deleted." });
  },

  async addFriend(req, res) {
    // POST to add a new friend to a user's friend list
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    if (!updatedUser) {
      res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json(updatedUser);
  },

  async deleteFriend(req, res) {
    // DELETE to remove a friend from a user's friend list
  },
};
