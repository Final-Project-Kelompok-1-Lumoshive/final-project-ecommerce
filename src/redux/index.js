import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./async/fetchSlice";
import langReducer from "./slices/langSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./async/authSlice";
import wishlistReducer from "./async/wishlistSlice";
import productReducer from "./async/productSlice";
import cartReducer from "./async/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lang", "auth"],
};

const persistedLang = persistReducer(persistConfig, langReducer);
const persistedAuth = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    lang: persistedLang,
    auth: persistedAuth,
    wishlist: wishlistReducer,
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
