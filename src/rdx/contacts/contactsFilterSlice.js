import { createSlice } from '@reduxjs/toolkit';
//-------------------------------------------------------
export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    getSearchQuery: (state, action) => {
      state.filter = action.payload;
    },
  },
});
//-------------------------------------------------------
export const { getSearchQuery } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
