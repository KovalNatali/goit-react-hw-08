// const RegistrationPage = () => {
//   return <div>RegistrationPage</div>;
// };

// export default RegistrationPage;

import { RegisterForm } from "../components/RegisterForm/RegisterForm";
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
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegistrationPage;
