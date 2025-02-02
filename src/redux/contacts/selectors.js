import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from './slice';
import { selectNameFilter } from "../filters/selectors";


export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
  (contacts, filter) => {
return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
})
