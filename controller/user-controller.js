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
  },

  async updateOneUser(req, res) {
    // PUT to update a user by its _id
  },

  async deleteOneUser(req, res) {
    // DELETE to remove user by its _id
    // BONUS --> remove a user's associated thoughts when deleted
  },

  async addFriend(req, res) {
    // POST to add a new friend to a user's friend list
  },

  async deleteFriend(req, res) {
    // DELETE to remove a friend from a user's friend list
  },
};
