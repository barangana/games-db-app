const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");

userRouter.get("/login", (req, res) => {
  res.send("Login router");
});

userRouter.get("/register", (req, res) => {
  res.send("Register router");
});

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", getUsers);

module.exports = userRouter;
