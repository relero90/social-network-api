const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const chalk = require("chalk");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(chalk.cyan(`API server to infinity and ${PORT}!`));
  });
});
