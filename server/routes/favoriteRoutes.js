const express = require("express");
const favoriteRouter = express.Router();
// const { favoriteMovie } = require("../controllers/favoriteController");

favoriteRouter.get("/favorite", (req, res) => {
  res.send("Favorites page");
});

module.exports = favoriteRouter;
