import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <Link to="/">
        <h1>app title</h1>
      </Link>
      <h1>favorites</h1>

      {localStorage.getItem("user") ? (
        <h1 onClick={handleLogout}>logout</h1>
      ) : (
        <Link to="/login">
          <h1> login </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
