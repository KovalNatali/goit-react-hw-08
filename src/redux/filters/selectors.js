import { itemsSelector } from "../../redux/contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [itemsSelector, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) ||
          number.includes(filter)
      );
    } else {
      return contacts;
    }
  }
);
