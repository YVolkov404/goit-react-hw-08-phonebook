import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import { contactsReducer } from './contactsSlice';
import { contactsFilterReducer } from './contactsFilterSlice';

//------------------------------------------------
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilterReducer,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['contacts', 'token'],
  blacklist: ['chakra'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    root: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
