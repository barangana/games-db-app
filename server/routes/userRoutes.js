const express = require("express");
const userRouter = express.Router();
const auth = require("../controllers/authentication");

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
userRouter.get("/users", auth, getUsers);

module.exports = userRouter;
