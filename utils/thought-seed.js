const connection = require("../config/connection");
const { Thought } = require("../models");
const thoughtSeeds = require("./thought-data");
const chalk = require("chalk");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // remove any existing data
  await Thought.deleteMany({});

  await Thought.collection.insertMany(thoughtSeeds);
  console.log(chalk.green("Thought seeds planted!"));
  process.exit(0);
});
