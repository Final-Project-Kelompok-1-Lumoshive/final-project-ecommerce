// src/redux/async/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state with hardcoded products
const initialState = {
  items: [
    {
      id: 1,
      title: "Product 1",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 100,
      priceBeforeDiscount: 130,
      discount: 23,
      rating: 5,
      reviews: 65,
    },
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
    },
    {
      id: 3,
      title: "Product 3",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 150,
      priceBeforeDiscount: 200,
      discount: 25,
      rating: 4,
      reviews: 76,
    },
    {
      id: 4,
      title: "Product 4",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 90,
      priceBeforeDiscount: null,
      discount: null,
      rating: 3,
      reviews: 23,
    },
    {
      id: 5,
      title: "Product 5",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 200,
      priceBeforeDiscount: 250,
      discount: 20,
      rating: 5,
      reviews: 89,
    },
    {
      id: 6,
      title: "Product 6",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 75,
      priceBeforeDiscount: 100,
      discount: 25,
      rating: 3,
      reviews: 33,
    },
    {
      id: 7,
      title: "Product 7",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 300,
      priceBeforeDiscount: 400,
      discount: 25,
      rating: 4,
      reviews: 71,
    },
    {
      id: 8,
      title: "Product 8",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 140,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 49,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
