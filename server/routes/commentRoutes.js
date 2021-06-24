const express = require("express");
const commentRouter = express.Router();
const auth = require("../controllers/authentication");

const { createComment } = require("../controllers/commentController");

commentRouter.get("/comments", (req, res) => {
  res.send("hello world");
});

commentRouter.post("/comment", createComment);

module.exports = commentRouter;
