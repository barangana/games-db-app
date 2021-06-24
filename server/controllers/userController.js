const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Post request handled at "/user/register"
// Creates a new user
// Verifies if the username is used in the database
// Verifies if the email is used in the database
// If all check works, create a user and store it in the database
exports.registerUser = async (req, res) => {
  verifyUsername();

  function verifyUsername() {
    User.findOne({ username: req.body.username }, (error, usedUser) => {
      if (error) {
        console.log("Error while verifying username occurred");
      }

      if (usedUser) {
        console.log("Invalid username: " + req.body.username);
        res.status(400).json("Username is not valid");
      } else {
        verifyEmail();
      }
    });
  }

  async function verifyEmail() {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    User.findOne({ email: req.body.email }, (error, usedEmail) => {
      if (error) {
        console.log("Error while verifying email occurred");
      }

      if (usedEmail) {
        console.log("Invalid email: " + req.body.email);
        res.status(400).json("Email is not valid");
      } else {
        const newUser = new User({
          username: req.body.username,
          password: hashPassword,
          email: req.body.email,
        });
        const user = newUser.save();
        console.log("User was successfully made " + user);
        res.status(200).json("User creation has been successful");
      }
    });
  }
};

// Allows the user to log in to their account
// Finds the username and checks if it's in the database
// Compares the hash password and plain text password
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("User not found");
    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Invalid password");

    // Create and assign a token with name of auth-token to the header
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "15m",
    });
    res.header("auth-token", token);

    const { password, __v, email, ...rest } = user._doc;
    // console.log(rest);
    // res.status(200).json("Successfully logged in.");
    // console.log(rest);
    console.log(rest);
    console.log("Succesfully logged in");
    res.status(200).json(rest);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Gets all users from the database and returns their username
// Omits the id, email, password and version key from the returned query
exports.getUsers = async (req, res) => {
  await User.find({}, (error, users) => {
    if (error) {
      console.log("Error occurred");
    }
    res.status(200).json(users);
  }).select(["-email", "-password", "-__v"]);
};
