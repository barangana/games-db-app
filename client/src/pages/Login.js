import Axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../constants/validation";
import { useHistory } from "react-router-dom";

/**
 * Login page
 */
function Login() {
  const history = useHistory();

  /**  Form validation with yupResolver */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  /**
   * Calls the backend to allow the user to sign in to their account
   * TODO: Local storage stores an empty value after page has been refreshed (Need to fix)
   */

  const submitForm = (data) => {
    const { username, password } = data;
    Axios.post("/user/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-form">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="username"
          className="login-text"
          placeholder="Type your username"
          {...register("username", { required: true })}
        />
        <p>{errors.username?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          className="login-text"
          {...register("password", { required: true })}
        />
        <p>{errors.password?.message}</p>
        <input
          type="submit"
          id="submit"
          value="Login"
          className="login-button"
        />
      </form>
    </div>
  );
}

export default Login;
