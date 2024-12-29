import { createSlice } from "@reduxjs/toolkit";

// temp cart data
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // quantity state is used to keep track of the quantity of the product in the cart, stock is the available stock of the product
      if (existingItem) {
        // If the item already exists in the cart, increment the quantity
        existingItem.quantity += 1; // Increment quantity
      } else {
        // If the item does not exist, add it to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
