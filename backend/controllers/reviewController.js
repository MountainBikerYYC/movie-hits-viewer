const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");
const Movie = require("../models/movieModel");

const setReview = asyncHandler(async (req, res) => {
  if (!req.body.reviewBody) {
    res.status(400);
    throw new Error("Please add a valid review.");
  }
  const review = req.body.reviewBody;
  const imdbId = req.body.imdbId;
  const movieToReview = await Movie.findOne({ imdbId: imdbId });

  const newReview = await Review.create({ body: review });
  
  movieToReview.reviewIds.push(newReview);
  await movieToReview.save();
  if (!movieToReview) {
    res.status(400);
    throw new Error("Movie not found");
  }
//   console.log(movieToReview.reviewIds);
  res.status(200).json(newReview);
});

const setReviewWithId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Set review with ${req.params.id}` });
});

module.exports = {
  setReview,
  setReviewWithId,
};
