const Comments = require("../models/commentModel");

exports.createComment = async (req, res) => {
  const newComment = new Comments(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.editComment = (req, res) => {};

exports.deleteComment = (req, res) => {};

exports.getComments = (req, res) => {};
