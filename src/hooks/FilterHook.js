import { createSelector } from '@reduxjs/toolkit';
import { selectContacts, selectFilteredContacts } from 'rdx/contacts/selectors';

export const filteredContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
