const express = require("express");
const userRouter = express.Router();

userRouter.get("/login", (req, res) => {
  res.send("Login router");
});

userRouter.get("/register", (req, res) => {
  res.send("Register router");
});

module.exports = userRouter;
