// const LoginPage = () => {
//   return <div>LoginPage</div>;
// };

// export default LoginPage;
import { LoginForm } from "../components/LoginForm/LoginForm";

import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
