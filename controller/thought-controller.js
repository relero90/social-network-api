const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    // get all thoughts
    const data = await Thought.find();
    console.log(data);
    if (!data) {
      res.status(500).json({ message: "Something went wrong..." });
    }
    res.status(200).json(data);
  },

  async createThought(req, res) {
    // create a new thought: req.body -->
    // {
    //   "thoughtText": "Here's a cool thought...",
    //   "username": "lernantino",
    //   "userId": "5edff358a0fcb779aa7b118b"
    // }
    const newThought = await Thought.create(req.body);
    if (!newThought) {
      res.status(500).json({ message: "Something went wrong." });
    }
    // push the created thought's _id to the associated user's thoughts array field
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: newThought._id } },
      { new: true }
    );
    if (!updatedUser) {
      res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json(updatedUser);
  },

  async getOneThought(req, res) {
    // GET to get a single thought by its _id
    const selectedThought = await Thought.findOne({ _id: req.params.id });
    if (!selectedThought) {
      res.status(404).json({ message: "No thought found with that ID." });
    }
    res.status(200).json(selectedThought);
  },
  async updateOneThought(req, res) {
    // PUT to update a single thought by its _id
  },
  async deleteOneThought(req, res) {
    // DELETE to remove a single thought by its _id
  },
  async createReaction(req, res) {
    // POST to create a reaction stored in a single thought's reactions array field
  },
  async deleteReaction(req, res) {
    // DELETE to pull and remove a reaction by the reaction's reactionId value
  },
};
