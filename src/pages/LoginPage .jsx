import { LoginForm } from "../components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
