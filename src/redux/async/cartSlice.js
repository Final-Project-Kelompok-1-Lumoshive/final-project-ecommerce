import { createSlice } from "@reduxjs/toolkit";

// temp cart data
const initialState = {
  items: [
    {
      id: 2,
      title: "Product 2",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 120,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 48,
      category: "Sport",
      stock: 15,
      quantity: 2,
    },
  ],
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
        existingItem.quantity += action.payload.quantity; // Increment quantity
      } else {
        // If the item does not exist, add it to the cart
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    updateCartQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const newQuantity = existingItem.quantity + action.payload.change;

        // Check if the new quantity exceeds available stock
        if (newQuantity > action.payload.stock) {
          alert(
            `You can only have up to ${action.payload.stock} of this item in your cart.`
          );
          return; // Exit if the limit is exceeded
        }

        // Update the quantity if it's valid
        existingItem.quantity = newQuantity;

        // Remove the item if the quantity is zero or less
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
