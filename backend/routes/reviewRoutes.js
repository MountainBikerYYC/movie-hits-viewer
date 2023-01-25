const express = require("express");
const router = express.Router();
const { setReview, setReviewWithId } =require("../controllers/reviewController");

router.post("/", setReview);

router.post("/:id", setReviewWithId);

module.exports = router;
