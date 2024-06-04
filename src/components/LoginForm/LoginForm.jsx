import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
// import css from './LoginForm.module.css';

import { TextField, Button } from "@mui/material";
import { Form, Label } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>Email</Label>
      <TextField type="email" name="email" label="Email" />
      <Label>Password</Label>
      <TextField type="password" name="password" label="Password" />
      <Button type="submit" variant="outlined">
        Log In
      </Button>
    </Form>
  );
};
