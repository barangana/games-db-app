import React from "react";
import { useParams } from "react-router-dom";
// import SearchList from "../components/Search/SearchList";
import MovieCard from "../components/Movie/MovieCard";

function SearchResults({ location }) {
  // console.log(location);
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
