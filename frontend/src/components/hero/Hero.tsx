import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import React from "react";

interface Movies {
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  genres: string[];
  poster: string;
  backdrops: string[];
  reviewIds: string[];
}

const Hero: React.FunctionComponent<{ movies: Movies }> = (props) => {
  const { movies } = props;
//   console.log("here ", movies);
  return (
    <div>
      {Array.isArray(movies) ? (
        <Carousel>
          {movies.map((movie: Movies) => {
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
      ) : null}
    </div>
  );
};

export default Hero;
