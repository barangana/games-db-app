import { useState, useEffect } from "react";
import Axios from "axios";
import { API_KEY } from "../api/Config";
import MovieCard from "./MovieCard";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((response) => {
      // console.log(response);
      //console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} popular={movie} />
      ))}
    </div>
  );
};

export default Popular;
