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
        <h2>AppTitle</h2>
      </Link>
      <Link to="/">
        <h2>Favorites</h2>
      </Link>

      <div className="login">
        {localStorage.getItem("user") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
