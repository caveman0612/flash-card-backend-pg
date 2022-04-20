const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const decksRouter = require("./decks/decks-router");
app.use("/decks", decksRouter);

app.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = app;
