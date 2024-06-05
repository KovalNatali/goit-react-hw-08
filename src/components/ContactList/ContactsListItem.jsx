// import { deleteContact } from "../../redux/contacts/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { itemsLoadingSelector } from "../../redux/contacts/selectors";
import NestedModal from "../Modal/Modal.styled";

export const ContactsListItem = ({ item, name, number }) => {
  // const dispatch = useDispatch();
  // const isFetching = useSelector(itemsLoadingSelector);

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <NestedModal
        key={item.id}
        id={item.id}
        item={item}
        name={item.name}
        number={item.number}
      />
      {/* <button
        onClick={() => handleDeleteContact(item.id)}
        disabled={isFetching}
      >
        Delete
      </button> */}
    </li>
  );
};
