import { createSlice } from '@reduxjs/toolkit';
//-------------------------------------------------------
export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
});
//-------------------------------------------------------
export const { getSearchQuery } = contactsFilterSlice.actions;

export const contactsFilterReducer = contactsFilterSlice.reducer;
