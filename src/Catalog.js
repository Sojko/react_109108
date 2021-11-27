import React from "react";
import MovieCard from "./MovieCard";

const Catalog = ({ movies }) => {
  return (
    <div className="catalog">
      {movies.map((m, index) => (
        <MovieCard movie={m} key={index} />
      ))}
    </div>
  );
};

export default Catalog;

