import { useState, useEffect } from "react";
import Axios from "axios";
import { API_KEY } from "../../api/Config";
import MovieCard from "./MovieCard";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      {/* {console.log(movies)} */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Popular;
