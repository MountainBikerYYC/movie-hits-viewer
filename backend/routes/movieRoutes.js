const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getSingleMovie,
} = require("../controllers/movieController");

router.get("/", getAllMovies);

router.get("/:id", getSingleMovie);

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Set Review" });
// });

// router.get("/", (req, res) =>  {
//   res.status(200).json({ message: "Get movies" });
// });
module.exports = router;
