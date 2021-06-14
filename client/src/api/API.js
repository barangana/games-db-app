import React from "react";
import Axios from "axios";
import { API_KEY } from "./Config";

// Example call to the API
// export const callApi = () => {
//   Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`).then(
//     (response) => {
//       console.log(response);
//     }
//   );
// };

// Calls the TMDB api and gets popular movies.
export const getPopularMovies = () => {
  Axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => {
    console.log(response);
  });
};
