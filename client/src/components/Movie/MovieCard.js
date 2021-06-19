import React from "react";
import { Link } from "react-router-dom";
import MoviePage from "../../pages/MoviePage";

function MovieCard({ popular }) {
  const { title, poster_path, id } = popular;

  const handleClick = () => {
    console.log("clicked " + title + id);
  };

  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          onClick={handleClick}
          alt={popular.title}
        />
      </Link>
      <h3>{popular.title}</h3>
    </div>
  );
}

export default MovieCard;
