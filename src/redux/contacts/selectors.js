export const itemsSelector = (state) => state.contacts.items;
export const itemsLoadingSelector = (state) => state.loading;
export const itemsErrorSelector = (state) => state.error;

export const selectFilteredContacts = (state) => state.filter;

// export const selectContactsFilter = (state) => state.filter;
