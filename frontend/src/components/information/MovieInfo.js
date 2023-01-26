import React from "react";
import { Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const MovieInfo = ({ movie }) => {
  const [number, setNumber] = React.useState(0);
  function generateRandomNumber(min, max) {
    setNumber(Math.floor(Math.random() * (max - min + 1) + min));
    // return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 3s
      () => generateRandomNumber(0, movie[0].backdrops.length - 1),
      3000
    );
    // console.log(number);
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Paper
        sx={{
          color: "white",
          backgroundColor: "black",
          width: "100%",
          height: "400px",
          marginTop: "0px",
        }}
      >
        <Typography variant="h4" display="inline">
          Title : {""}
          {movie[0].title}
        </Typography>
        <br></br>
        <Typography variant="h4" display="inline">
          {" "}
          Release Date: {movie[0].releaseDate}
        </Typography>
        <br></br>
        <Typography variant="h4" display="inline">
          Genres:{" "}
          {movie[0].genres.map((g) => {
            return (
              <Typography variant="h5" display="inline">
                {g}{" "}
              </Typography>
            );
          })}
        </Typography>
        <br></br>
        <div className="test">
          <img src={`${movie[0].backdrops[number]}`} width="500" height="400" />
        </div>
      </Paper>
    </>
  );
};

export default MovieInfo;
