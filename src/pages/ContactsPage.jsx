// const ContactsPage = () => {
//   return <div>ContactsPage</div>;
// };

// export default ContactsPage;

import { Helmet } from "react-helmet-async";
import { AddContastForm } from "../components/ContactForm/ContactForm";
import { ContactsList } from "../components/ContactList/ContactsList";
import { Filter } from "../components/Filter/SearchBox";
import { Container } from "@mui/material";

const ContactsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Container maxWidth="xl">
        <h2>Contacts list</h2>
        <AddContastForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </div>
  );
};

export default ContactsPage;
