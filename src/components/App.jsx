import { lazy } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Navigation from "./Navigation/Navigation";
import { Layout } from "./Layout";

import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
// import { useSelector } from "react-redux";
// import { selectIsRefreshing } from "../redux/auth/selectors";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage "));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </Layout>
    </>
  );

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <>

  /* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster /> */

  // </>
  // );
};
export default App;
