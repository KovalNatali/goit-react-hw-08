import { NavLink } from "react-router-dom";
import { Nav } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/register" style={{ textDecoration: "none" }}>
        Register
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: "none" }}>
        Log In
      </NavLink>
    </Nav>
  );
};
export default AuthNav;
