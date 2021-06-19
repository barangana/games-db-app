import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../constants/validation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = (data) => {
    console.log(data);
    const { username, password } = data;
    Axios.post("/user/login", {
      username: username,
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
    <div className="Login">
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <p>{errors.username?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Login;
