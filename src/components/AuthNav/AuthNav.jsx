import { NavLink } from "react-router-dom";
import { Nav } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Nav>
  );
};
export default AuthNav;
