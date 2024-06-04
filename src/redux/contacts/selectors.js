export const itemsSelector = (state) => state.contacts.items;
export const itemsLoadingSelector = (state) => state.loading;
export const itemsErrorSelector = (state) => state.error;

export const selectContactsFilter = (state) => state.filter;
