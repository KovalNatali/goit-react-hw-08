import { Helmet } from "react-helmet-async";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { itemsLoadingSelector } from "../redux/contacts/selectors";
import { itemsErrorSelector } from "../redux/contacts/selectors";
import { AddContastForm } from "../components/ContactForm/ContactForm";
import { ContactsList } from "../components/ContactList/ContactsList";
import { Filter } from "../components/Filter/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(itemsLoadingSelector);
  const error = useSelector(itemsErrorSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        {isLoading && !error && <b>Request is in progress</b>}
        <ContactsList />
      </Container>
    </div>
  );
};

export default ContactsPage;
