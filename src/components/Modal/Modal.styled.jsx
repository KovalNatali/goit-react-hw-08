import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

import { useDispatch, useSelector } from "react-redux";
import { itemsLoadingSelector } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export default function NestedModal(item) {
  const dispatch = useDispatch();
  const isFetching = useSelector(itemsLoadingSelector);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Do you want to delete this contact?</h2>
          <p id="parent-modal-description">
            {item.name} : {item.number}
          </p>
          <button
            onClick={() => handleDeleteContact(item.id)}
            disabled={isFetching}
          >
            Delete
          </button>
        </Box>
      </Modal>
    </div>
  );
}
