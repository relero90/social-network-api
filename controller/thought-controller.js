const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    // get all thoughts
    const data = await Thought.find();
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
    // }
    const newThought = await Thought.create(req.body);
    if (!newThought) {
      res.status(500).json({ message: "Something went wrong." });
    }
    // push the created thought's _id to the associated user's thoughts array field
    const updatedUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $addToSet: { thoughts: newThought._id } },
      { new: true }
    );
    if (!updatedUser) {
      res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json(newThought);
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
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!updatedThought) {
      res.status(404).json({ message: "No thought found with that ID." });
    }
    res.status(200).json(updatedThought);
  },

  async deleteOneThought(req, res) {
    // DELETE to remove a single thought by its _id
    const deletedThought = await Thought.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deletedThought) {
      res.status(404).json({ message: "No thought found with that ID." });
    }

    const updatedUser = await User.findOneAndUpdate(
      { username: deletedThought.username },
      { $pull: { thoughts: req.params.id } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({
        message:
          "Thought was deleted but no user was found with the requested username.",
      });
    } else {
      res.status(200).json(updatedUser);
    }
  },

  async createReaction(req, res) {
    // POST to create a reaction stored in a single thought's reactions array field
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $push: {
          reactions: {
            reactionBody: req.body.reactionBody,
            username: req.body.username,
          },
        },
      },
      { new: true }
    );
    if (!updatedThought) {
      res.status(500).json({
        message: "Something went wrong and the thought was not updated.",
      });
    }
    res.status(200).json(updatedThought);
  },

  async deleteReaction(req, res) {
    // DELETE to pull and remove a reaction by the reaction's reactionId value
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { new: true }
    );
    if (!updatedThought) {
      res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json(updatedThought);
  },
};
