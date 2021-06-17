import { useState } from "react";
import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    console.log(username, email, password, confirmPassword);
    Axios.post("/user/register", {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Register">
      <form>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        ></input>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        ></input>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
        ></input>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
