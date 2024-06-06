import { ContactsListItem } from "../../components/ContactList/ContactsListItem";
import { useSelector } from "react-redux";
import { itemsSelector } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(itemsSelector);
  const filter = useSelector(selectFilteredContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map((item) => (
        <ContactsListItem
          key={item.id}
          item={item}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
