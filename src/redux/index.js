import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./async/fetchSlice";
import langReducer from "./slices/langSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["fetch"],
  };

const persistedLang = persistReducer(persistConfig, langReducer);

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    lang: persistedLang
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };