import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [login, setLogin] = useState("Login");

  const handleLogout = () => {
    setLogin("Login");
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
        <button onClick={handleLogout}>{login}</button>
      ) : (
        <Link to="/login">
          <button>{login}</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
