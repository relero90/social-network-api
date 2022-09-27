const connection = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./user-data");
const chalk = require("chalk");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // remove any existing data
  await User.deleteMany({});

  await User.collection.insertMany(userSeeds);
  console.log(chalk.blue("User seeds planted!"));
  process.exit(0);
});
