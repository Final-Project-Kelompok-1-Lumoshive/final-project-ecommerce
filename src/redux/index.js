import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./async/fetchSlice";
import langReducer from "./slices/langSlice";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import authReducer from "./async/authSlice";
import wishlistReducer from "./async/wishlistSlice";
import productReducer from "./async/productSlice";
import cartReducer from "./async/cartSlice";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_ENCRYPTION_KEY,
  onError: function (error) {
    console.log(error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lang", "auth"],
  transforms: [encryptor],
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
