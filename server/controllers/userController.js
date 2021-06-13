const User = require("../models/userModels");
const bcrypt = require("bcrypt");

// Post request handled at "/user/register"
// Creates a new user

// 1-Make a salt and hash hash
// 2-Call the model and create a new user with username, password and email
// 3-Store the user data into the database
exports.registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
    });

    const user = await newUser.save();
    res.status(200).json("User creation has been successful");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 1-We query the database and search for the user
// 2-If no user, send error
// 3-If not, compare the passwords and log the user in
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials");

    const validate = await bcrypt.compare(req.body.password, username.password);
    !validate && res.status(400).json("Wrong credentials");

    res.status(200).json(user);
    console.log(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 1- We query the database and search for the user
// 2- If user exists, send error
// 3- If not, do the next function
async function verifyUsername(res, req) {
  await User.findOne({ username: req.body.username }, (error, usedUser) => {
    if (error) {
      res
        .status(400)
        .json({ message: "Error occurred while querying username. " });
    }
    if (usedUser) {
      res.status(400).json({ message: "Username is taken. " });
    } else {
      res.status(200).json("username is not taken");
    }
  });
}

// 1- We query the database and search for the email
// 2- If email is used, send error
// 3- If not, do the next function
function verifyEmail() {}
