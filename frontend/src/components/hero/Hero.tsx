import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import React from "react";
import Movies from "../../interfaces/db_interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero: React.FunctionComponent<{ movies: Movies }> = (props) => {
  const { movies } = props;
  return (
    <div>
      {Array.isArray(movies) ? (
        <Carousel>
          {movies.map((movie: Movies) => {
            return (
              <Paper>
                <div className="movie-card-container">
                  <div
                    className="movie-card"
                    style={{ backgroundImage: `url(${movie.backdrops[0]})` }}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link
                          to={`./Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
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
