const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// Post request handled at "/user/register"
// Creates a new user
// 1-Make a salt and hash hash
// 2-Call the model and create a new user with username, password and email
// 3-Store the user data into the database
exports.registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email,
  });

  const user = await newUser.save();
  res.status(200).json("User creation has been successful");
};

// Post request handled at "/user/login"
// Allows the user to log in
// 1-We query the database and search for the user
// 2-If no user, send error
// 3-If not, compare the passwords and log the user in
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong credentials");

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
    console.log(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  await User.find({}, (error, users) => {
    if (error) {
      res.status(400).json({ message: "Error occurred while querying" });
    }
    console.log(users);
    res.json(users);
  });
};

function verifyUsername() {
  User.findOne({ username: req.body.username }, (error, usedUser) => {
    if (error) {
      return res
        .status(400)
        .json({ message: "Error occurred while querying username. " });
    } else if (usedUser) {
      return res.status(400).json({ message: "Username is taken. " });
    } else {
      verifyEmail();
    }
  });
}

function verifyEmail() {
  User.findOne({ email: req.body.email }, (error, usedEmail) => {
    if (error) {
      return res
        .status(400)
        .json({ message: "Error occurred while querying email. " });
    } else if (usedEmail) {
      return res.status(400).json({ message: "Email is already used." });
    }
  });
}
