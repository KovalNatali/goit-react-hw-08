import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
export default Navigation;
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// export const Navigation = () => {
//   const { isLoggedIn } = useSelector(selectIsLoggedIn);

//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
//     </nav>
//   );
// };
