const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
// @desc Get all movies from db
// @route Get /api/v1/movies
// @access private
const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

//
const getSingleMovie = asyncHandler(async (req, res) => {
  const imdbId = req.params.id;
  const singleMovie = await Movie.find({ imdbId: imdbId });
  res.status(200).json(singleMovie);
});

module.exports = {
  getAllMovies,
  getSingleMovie,
};
