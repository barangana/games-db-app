import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  // const [login, setLogin] = useState("Login");

  const handleLogout = () => {
    // setLogin("Login");
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>AppTitle</h1>
      </Link>
      <Link to="/">
        <h1>Favorites</h1>
      </Link>

      <div className="login">
        {localStorage.getItem("user") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
