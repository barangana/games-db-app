import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_KEY } from "../api/Config";
import PropTypes from "prop-types";

import Comments from "../components/Movie/Sections/Comments";
import Info from "../components/Movie/Sections/Info";

function MoviePage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const { title, id, backdrop_path } = details;

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then((response) => {
      setDetails(response.data);
    });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={`${title}'s backdrop`}
      />
      <Info id={id} movieInfo={details} />
      <Comments />
    </div>
  );
}

MoviePage.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default MoviePage;
