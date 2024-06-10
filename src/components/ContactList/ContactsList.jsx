import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { ContactsListItem } from "../../components/ContactList/ContactsListItem";

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
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
