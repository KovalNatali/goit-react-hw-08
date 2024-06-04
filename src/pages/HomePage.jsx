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
      <h2> Welcome page</h2>
    </div>
  );
}
