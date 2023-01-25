const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  body: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
