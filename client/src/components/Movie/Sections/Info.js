import React from "react";
import PropTypes from "prop-types";

function Info({ movieInfo }) {
  const { overview, release_date, status, runtime } = movieInfo;

  return (
    <div>
      <h1>here will be the movie info section</h1>
      <div>
        <h3>description: {overview}</h3>
        <h3>release date: {release_date}</h3>
        <h3>status: {status}</h3>
        <h3>runtime: {runtime} mins</h3>
      </div>
    </div>
  );
}

Info.propTypes = {
  description: PropTypes.string,
  release_date: PropTypes.string,
  status: PropTypes.string,
  runtime: PropTypes.number,
};

export default Info;
