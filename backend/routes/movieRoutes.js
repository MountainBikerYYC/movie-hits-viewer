const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getSingleMovie,
} = require("../controllers/movieController");

router.get("/", getAllMovies);

router.get("/:id", getSingleMovie);

module.exports = router;
