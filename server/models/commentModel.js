const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;
