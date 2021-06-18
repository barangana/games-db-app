import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../constants/validation";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data) => {
    // console.log(data.email, data.username, data.password, data.confirmPassword);
    console.log(data);
    const { email, username, password } = data;
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

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleRegister = (event) => {
  //   console.log(username, email, password, confirmPassword);
  // };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          // onChange={(event) => setEmail(event.target.value)}
          // value={email}
          {...register("email", { required: true })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          // onChange={(event) => setUsername(event.target.value)}
          // value={username}
          {...register("username", { required: true })}
        />
        <p>{errors.username?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          // onChange={(event) => setPassword(event.target.value)}
          // value={password}
          {...register("password", { required: true })}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          // onChange={(event) => setConfirmPassword(event.target.value)}
          // value={confirmPassword}
          {...register("confirmPassword", { required: true })}
        />
        <p>{errors.confirmPassword && "Passwords must match"}</p>
        <input type="submit" id="submit" />
      </form>
      {/* <button onClick={handleRegister}>Register</button> */}
    </div>
  );
}

export default Register;
