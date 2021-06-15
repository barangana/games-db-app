const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Users" },
  movieId: { type: String, required: true },
  title: { type: String },
  runtime: { type: String },
  score: { type: Number },
});

const Favorites = mongoose.model("Favorites", favoriteSchema);
module.exports = Favorites;
