import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { itemsLoadingSelector } from "../../redux/contacts/selectors";

export const ContactsListItem = ({ item, name, number }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(itemsLoadingSelector);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button
        onClick={() => handleDeleteContact(item.id)}
        disabled={isFetching}
      >
        Delete
      </button>
    </li>
  );
};
