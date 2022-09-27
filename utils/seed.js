const connection = require("../config/connection");
const { User, Thought } = require("../models");
// maybe require in a data.js file here
const { userSeeds, thoughtSeeds } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // remove any existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(userSeeds);
  await Thought.collection.insertMany(thoughtSeeds);
  process.exit(0);
});
