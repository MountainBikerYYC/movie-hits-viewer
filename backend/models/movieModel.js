const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  imdbId: { type: String, required: true },
  title: { type: String, required: true },
  releaseDate: { type: String, required: true },
  trailerLink: { type: String, required: true },
  genres: [],
  poster: { type: String, required: true },
  backdrops: [],
  reviewIds: [],
});

module.exports = mongoose.model("Movie", movieSchema);
