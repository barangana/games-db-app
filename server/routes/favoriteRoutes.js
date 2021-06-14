const express = require("express");
const favoriteRouter = express.Router();

favoriteRouter.get("/favorite", (req, res) => {
  res.send("Favorites page");
});

module.exports = favoriteRouter;
