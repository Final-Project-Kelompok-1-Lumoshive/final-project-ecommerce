import { createSlice } from "@reduxjs/toolkit";

// temp cart data
const initialState = {
  items: [
    {
      id: 2,
      title: "Product 2",
      image: [
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      ],
      price: 120,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 48,
      category: "Sport",
      stock: 15,
      quantity: 2,
    },
    {
      id: 5,
      title: "Product 5",
      image: [
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      ],
      price: 200,
      priceBeforeDiscount: 250,
      discount: 20,
      rating: 5,
      reviews: 89,
      category: "Men's Fashion",
      stock: 5,
      quantity: 3,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("addToCart action payload:", action.payload);
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // quantity state is used to keep track of the quantity of the product in the cart, stock is the available stock of the product
      if (existingItem) {
        // If the item already exists in the cart, increment the quantity
        existingItem.quantity += action.payload.quantity; // Increment quantity
        console.log("existingItem quantity", existingItem.quantity);
      } else {
        // If the item does not exist, add it to the cart
        state.items.push(action.payload);
        console.log("newItem", action.payload.quantity);
      }
    },

    removeFromCart: (state, action) => {
      console.log("removeFromCart action payload:", action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log("current cart", state.items);
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
        console.log(
          `existingItem ${action.payload.change}:`,
          existingItem.quantity
        );

        // Not used
        // Remove the item if the quantity is zero or less
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },

    // Not used yet
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
