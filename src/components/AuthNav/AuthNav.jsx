import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
export default AuthNav;
