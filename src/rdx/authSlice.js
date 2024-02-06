import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, signout, refreshing } from './authorization';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isUserLoggedIn: false,
  isAccessRefreshing: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isUserLoggedIn = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isUserLoggedIn = true;
      })
      .addCase(signout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isUserLoggedIn = false;
      })
      .addCase(refreshing.pending, state => {
        state.isAccessRefreshing = true;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isUserLoggedIn = true;
        state.isAccessRefreshing = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isAccessRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
