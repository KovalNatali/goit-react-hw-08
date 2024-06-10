import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { Helmet } from "react-helmet-async";
import { Container } from "@mui/material";

const RegistrationPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Container maxWidth="xl">
        <h2>Registration</h2>
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default RegistrationPage;
