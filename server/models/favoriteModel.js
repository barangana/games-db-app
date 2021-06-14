const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
  userId: { type: ObjectId, ref: User },
  movieId: { type: String, required: true },
  title: { type: String, required: true },
  runtime: { type: String },
  score: { type: number },
});

const Favorites = mongoose.model("Favorites", favoriteSchema);
module.exports = Favorites;
