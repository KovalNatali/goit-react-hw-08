// const RegistrationPage = () => {
//   return <div>RegistrationPage</div>;
// };

// export default RegistrationPage;

import { RegisterForm } from "../components/RegisterForm/RegisterForm";

import { Helmet } from "react-helmet-async";

const RegistrationPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
