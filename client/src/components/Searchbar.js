import { useState } from "react";
import Axios from "axios";
import { API_KEY } from "../api/Config";
// import SearchResults from "../pages/SearchResults";
import { Redirect, useHistory } from "react-router-dom";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const searchMovie = () => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
    )
      .then((response) => {
        console.log(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pressEnter = (event) => {
    if (event.keyCode === 13) {
      console.log(search);
      searchMovie();
      history.push(`/search-results/${search}`);
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search by movie title"
        onKeyDown={pressEnter}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default Searchbar;
