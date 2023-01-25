import React from "react";
import Hero from "../hero/Hero";
import Movies from "../../interfaces/db_interfaces";

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
