import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/slice.js";
import contactsReducer from "./contacts/slice.js";
import { authReducer } from "./auth/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
    version: 1,
  witelist: ["token"],
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
 reducer: {
    contacts: contactsReducer,
        filters: filtersReducer,
    auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
      
});

export const persistor = persistStore(store)
 


