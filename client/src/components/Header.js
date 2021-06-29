import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  // const [login, setLogin] = useState("Login");

  const handleLogout = () => {
    // setLogin("Login");
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>app title</h1>
      </Link>
      <Link to="/">
        <h1>favorites</h1>
      </Link>

      <div className="login">
        {localStorage.getItem("user") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
