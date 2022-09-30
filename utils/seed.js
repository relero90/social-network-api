const connection = require("../config/connection");
const { User, Thought } = require("../models");
const userSeeds = require("./user-data");
const thoughtSeeds = require("./thought-data");
const chalk = require("chalk");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // remove any existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(userSeeds);
  console.log(chalk.magenta("User seeds planted! 🌱"));

  // await Thought.collection.insertMany(thoughtSeeds);
  // console.log(chalk.blue("Thought seeds planted! 🌱"));

  process.exit(0);
});
