import React from "react";

function Info({ movieInfo }) {
  const { overview, release_date, status, runtime } = movieInfo;

  return (
    <div>
      {console.log(movieInfo)}
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

export default Info;
