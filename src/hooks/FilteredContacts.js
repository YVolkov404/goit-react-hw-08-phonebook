import { createSelector } from '@reduxjs/toolkit';
//-----------------------------------------------
export const selectContacts = state => state.contacts;
export const selectFilteredContacts = state => state.filter;
//-----------------------------------------------

export const filteredContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
