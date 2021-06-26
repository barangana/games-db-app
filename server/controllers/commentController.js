const Comments = require("../models/commentModel");
const mongoose = require("mongoose");

// Create comment
exports.createComment = async (req, res) => {
  const newComment = new Comments(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

// edit comment
exports.editComment = async (req, res) => {
  try {
    // finding the comment by the comment id

    const comment = await Comments.findById(req.params.id);
    //comparing usernames from db and one from req
    if (comment.username === req.body.username) {
      //updating the comment
      const updatedComment = await Comments.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } else {
      // if they don't match, send an error
      console.log(req.params.id);

      console.log(mongoose.Types.ObjectId.isValid(req.params.id));
      console.log(typeof req.params.id);
      console.log(mongoose.Types.ObjectId.isValid("60d689fe81bab33ad41783b5"));

      // console.log(comment.username);
      // console.log("username: " + req.body.username);
      res.status(401).json("test");
      // res.status(401).json("You are not allowed to edit someone else's comment. ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete comment
exports.deleteComment = async (req, res) => {
  try {
    // find the post by the comment id
    const comment = await Comments.findById(req.params.id);
    console.log(mongoose.Types.ObjectId.isValid(req));
    // check if the username from db matches to the one in req.body
    if (comment.username === req.body.username) {
      //if they do match, delete the comment
      await comment.delete();
      res.status(200).json("Comment has successfully been deleted");
    } else {
      // if they don't match send an error message
      res.status(401).json("You are not allowed to delete this comment.");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

// read comments
exports.getComments = async (req, res) => {
  await Comments.find({}, (error, comments) => {
    if (error) {
      console.log("Error occurred");
    }
    res.status(200).json(comments);
  });
};
