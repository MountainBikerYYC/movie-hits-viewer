import React from "react";
import Hero from "../hero/Hero";

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

const Home: React.FunctionComponent<{ movies: Movies }> = (props) => {
  const { movies } = props;
  //   console.log("passed in props ", props);
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;
