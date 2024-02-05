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
import { contactsFilterReducer } from './contactsFilterSlice';
import { authReducer } from './authSlice';

//------------------------------------------------
const rootReducer = combineReducers({
  contacts: contactsFilterReducer,
  filter: authReducer,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['contacts', 'token'],
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
