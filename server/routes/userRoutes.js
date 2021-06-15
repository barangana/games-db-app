const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  verifyUsername,
} = require("../controllers/userController");

// @route  POST /user/register
// @desc   Sends user data for registration
userRouter.post("/register", registerUser);

// @route  POST /user/register
// @desc   Sends user data to log in
userRouter.post("/login", loginUser);

// @route  GET /users/users
// @desc   Gets all users' data
userRouter.get("/users", getUsers);

module.exports = userRouter;
