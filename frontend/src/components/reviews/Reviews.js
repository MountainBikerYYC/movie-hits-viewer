import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MovieInfo from "../information/MovieInfo";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;
    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });
      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Movie Info</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {movie ? <img height="90%" src={movie[0].poster} alt="" /> : ""}
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  {movie ? <MovieInfo movie={movie} /> : ""}
                </Col>
              </Row>
            </>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
