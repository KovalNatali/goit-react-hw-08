// const HomePage = () => {
//   return <div>HomePage</div>;
// };
// export default HomePage;

import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >
      <Helmet>
        <title>Your PhoneBook</title>
      </Helmet>
      <h1> Welcome page</h1>
    </div>
  );
}
