import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.imageurl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <div className="movie-subtitle">Reżyseria: {movie.director}</div>
        <Card.Text>{movie.description}</Card.Text>
        <h5 style={{ color: "blue" }}>Obsada</h5>
        {movie.actors.map((a, index) => (
          <p className="actor" key={index}>
            {a}
          </p>
        ))}

        <Button variant="primary" style={{ marginTop: 20 }}>
          Zobacz szczegóły
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

// title
// director
// description
// actors
// imageurl
