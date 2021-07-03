import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Movie card component
 * Shows the card of a movie.
 * When clicked, sends the user to the respective movie page.
 */
function MovieCard({ movie }) {
  console.log(movie);
  const { title, poster_path, id } = movie;

  const handleClick = () => {
    console.log("clicked " + title + id);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          onClick={handleClick}
          alt={movie.title}
        />
      </Link>
      {/* <h3>{movie.title}</h3> */}
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number,
};

export default MovieCard;
