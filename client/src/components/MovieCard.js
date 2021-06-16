import React from "react";

function MovieCard({ popular }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${popular.poster_path}`}></img>
      <h3>{popular.title}</h3>
    </div>
  );
}

export default MovieCard;
