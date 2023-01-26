import React from "react";
import Background from '../background/Backgound'
import Movies from "../../interfaces/db_interfaces";

const Home: React.FunctionComponent<{ movies: Movies }> = (props) => {
  const { movies } = props;
  //   console.log("passed in props ", props);
  return (
    <div>
      <Background movies={movies} />
    </div>
  );
};

export default Home;
