import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import React from "react";

type Movies = {
  imdbId: { type: String; required: true };
  title: { type: String; required: true };
  releaseDate: { type: String; required: true };
  trailerLink: { type: String; required: true };
  genres: [];
  poster: { type: String; required: true };
  backdrops: [];
  reviewIds: [];
};

const Hero: React.FunctionComponent<Movies> = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
