import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1>app title</h1>
      </Link>

      <h1>favorites</h1>
      <h1>login/logout/register</h1>
    </div>
  );
};

export default Header;
