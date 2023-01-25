const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose.connect("mongodb://localhost/movie-api-db", { useNewUrlParser: true });

app.use("/api/v1/movies", require("./routes/movieRoutes"));

app.use("/api/v1/reviews", require("./routes/reviewRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
