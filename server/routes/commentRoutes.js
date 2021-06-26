const express = require("express");
const commentRouter = express.Router();
const auth = require("../controllers/authentication");

const {
  createComment,
  deleteComment,
  editComment,
  getComments,
} = require("../controllers/commentController");

// commentRouter.get("/comments", (req, res) => {
//   res.send("hello world");
// });

commentRouter.get("/comments", getComments);
commentRouter.post("/", createComment);
commentRouter.delete("/:id", deleteComment);
commentRouter.put("/:id", editComment);

module.exports = commentRouter;
