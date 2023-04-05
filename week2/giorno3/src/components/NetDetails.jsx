import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const NetDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [comment, setComment] = useState([]);

  const getDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d74ddba4&i=` + params.id
      );
      if (response.ok) {
        const data = await response.json();
        setMovie(data);
      } else {
        console.log("errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.id, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2ODA2MTQxMjksImV4cCI6MTY4MTgyMzcyOX0.8yuksWc6qFT6r9WXecxjXeKFBihcwGe8wXXhY9KqW5c"
        }
        })
      if (response.ok) {
        const comments = await response.json();
        setComment(comments);
        console.log(comments);
      } else {
        console.log("errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetails();
    getComments();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center my-2">
          <h3 className="text-light mb-3">{movie.Title}</h3>
            <img alt={movie.Title}src={movie.Poster} style={{width: 200}} className="mb-3" />
              <p className="text-start">{movie.Plot}</p>
            <div className="text-light text-start">
                <hr />
              <ul className="list-unstyled">
                <li><strong>Genre</strong>: {movie.Genre}</li>
                <li><strong>Director</strong>: {movie.Director}</li>
                <li><strong>Actors</strong>: {movie.Actors}</li>
                <li><strong>Runtime</strong>: {movie.Runtime}</li>
                <li><strong>Year</strong>: {movie.Year}</li>
                <li><strong>Rated</strong>: {movie.Rated}</li>
              </ul>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NetDetails
