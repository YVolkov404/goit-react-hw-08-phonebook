export const selectUser = state => state.auth.user;
export const selectIsUserLoggedIn = state => state.auth.isUserLoggedIn;
export const selectIsAccessRefreshing = state => state.auth.isAccessRefreshing;

//-----------------------------------------------------------------------------
export const selectContacts = state => state.contacts;
export const selectFilterContacts = state => state.filter;
