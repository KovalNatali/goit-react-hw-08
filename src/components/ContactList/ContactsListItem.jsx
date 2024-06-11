import NestedModal from "../Modal/Modal.styled";

export const ContactsListItem = ({ item, name, number }) => {
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
    </li>
  );
};
