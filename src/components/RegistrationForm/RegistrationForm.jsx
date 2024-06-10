import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button } from "@mui/material";
import { Form, Label } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>Username</Label>
      <TextField type="text" name="name" label="Name" />
      <Label>Email</Label>
      <TextField type="email" name="email" label="Email" />
      <Label>Password</Label>
      <TextField type="password" name="password" label="Password" />

      <Button type="submit" variant="outlined">
        Register
      </Button>
    </Form>
  );
};
