import { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../api/Config";
import { useHistory } from "react-router-dom";

function Searchbar() {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const history = useHistory();

  function searchMovie() {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`
    )
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!searchResults) {
      //empty so it loads on initial render
    } else {
      history.push({
        pathname: `/searchResults/${movieTitle}`,
        state: { detail: searchResults },
      });
    }
  }, [searchResults]);

  const pressEnter = (event) => {
    if (event.keyCode === 13) {
      searchMovie();
      // console.log(searchResults);
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search by movie title"
        onKeyDown={pressEnter}
        value={searchResults}
        onChange={(event) => setMovieTitle(event.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
    </div>
  );
}

export default Searchbar;
