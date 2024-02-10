import {
  configureStore,
  // combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { authReducer } from './authSlice';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { contactsReducer } from './contactsSlice';
// import { contactsFilterReducer } from './contactsFilterSlice';

//------------------------------------------------
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: contactsFilterReducer,
// });

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'phonebook',
  hostname: 'localhost',
  port: 3000, // the port your remotedev server is running at
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['chakra'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer, composeEnhancers),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
