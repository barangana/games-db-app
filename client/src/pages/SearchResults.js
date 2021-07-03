import React from "react";
import { useParams } from "react-router-dom";
// import SearchList from "../components/Search/SearchList";
import MovieCard from "../components/Movie/MovieCard";

/**
 * Displays search results of a movie based on the input title.
 */
function SearchResults({ location }) {
  // Gets state data from the location props.
  const { state } = location;
  const data = [...state.detail];
  console.log(data);
  return (
    <div>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        // <SearchList key={movie.id} movies={movie} />
      ))}
    </div>
  );
}

export default SearchResults;
