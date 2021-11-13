import React from "react";
import MovieCard from "./MovieCard";

const Catalog = () => {
  const movies = [
    {
      title: "Szklana pułapka",
      director: "John McTiern",
      description:
        "Film powstał na podstawie powieści Nothing Lasts Forever Rodericka Thorpa. Film przedstawia historię nowojorskiego detektywa Johna McClane, który musi odbić wieżowiec japońskiej korporacji z rąk terrorystów.",
      imageurl:
        "https://d-pt.ppstatic.pl/kadry/k/r/1/92/cc/561fa1c0b1593_o,size,969x565,q,71,h,3d262e.jpg",
      actors: [
        "Bruce Willis",
        "Alan Rickman",
        "Bonnie Bedelia",
        "Aleksander Godunow",
      ],
    },
    {
      title: "Avatar",
      director: "James Cameroon",
      description:
        "Główny bohater, Jake Sully to sparaliżowany od pasa w dół weteran. Po śmierci swego brata bliźniaka, Toma, i ze względu na takie samo DNA, otrzymuje propozycję pracy w korporacji RDA w ramach programu Avatar.",
      imageurl:
        "https://pm1.narvii.com/6470/59c30cbf64df95df9daec80a4b13521c1e217077_00.jpg",
      actors: ["Sam Worthington", "Zoë Saldaña", "Sigourney Weaver"],
    },
  ];

  return (
    <div className="catalog">
      {movies.map((m, index) => (
        <MovieCard movie={m} key={index} />
      ))}
    </div>
  );
};

export default Catalog;

// Title
// Director
// Description
// Actors
// Image
