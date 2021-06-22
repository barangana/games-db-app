import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required().min(5),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
