const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/movies", require("./routes/movieRoutes"));

app.use("/api/v1/reviews", require("./routes/reviewRoutes"));
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../frontend/build"));
    app.get("*", (req, res) => {
      req.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
    });
  }

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
