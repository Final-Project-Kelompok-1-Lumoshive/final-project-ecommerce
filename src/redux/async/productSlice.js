// src/redux/async/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state with hardcoded products
const initialState = {
  items: [
    {
      id: 1,
      title: "Product 1",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 100,
      priceBeforeDiscount: 130,
      discount: 23,
      rating: 5,
      reviews: 65,
      category: "Men's Fashion",
      stock: 0,
    },
    {
      id: 2,
      title: "Product 2",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 120,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 48,
      category: "Sport",
      stock: 15,
    },
    {
      id: 3,
      title: "Product 3",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 150,
      priceBeforeDiscount: 200,
      discount: 25,
      rating: 4,
      reviews: 76,
      category: "Hobby",
      stock: 10,
    },
    {
      id: 4,
      title: "Product 4",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 90,
      priceBeforeDiscount: null,
      discount: null,
      rating: 3,
      reviews: 23,
      category: "Kitchen Appliances",
      stock: 30,
    },
    {
      id: 5,
      title: "Product 5",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 200,
      priceBeforeDiscount: 250,
      discount: 20,
      rating: 5,
      reviews: 89,
      category: "Men's Fashion",
      stock: 5,
    },
    {
      id: 6,
      title: "Product 6",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 75,
      priceBeforeDiscount: 100,
      discount: 25,
      rating: 3,
      reviews: 33,
      category: "Sport",
      stock: 20,
    },
    {
      id: 7,
      title: "Product 7",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 300,
      priceBeforeDiscount: 400,
      discount: 25,
      rating: 4,
      reviews: 71,
      category: "Hobby",
      stock: 8,
    },
    {
      id: 8,
      title: "Product 8",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 140,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 49,
      category: "Kitchen Appliances",
      stock: 18,
    },
    {
      id: 9,
      title: "Product 9",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 180,
      priceBeforeDiscount: 220,
      discount: 18,
      rating: 4,
      reviews: 57,
      category: "Electronics",
      stock: 12,
    },
    {
      id: 10,
      title: "Product 10",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 220,
      priceBeforeDiscount: 300,
      discount: 27,
      rating: 5,
      reviews: 95,
      category: "Home Decor",
      stock: 25,
    },
    {
      id: 11,
      title: "Product 11",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 65,
      priceBeforeDiscount: 80,
      discount: 18,
      rating: 3,
      reviews: 19,
      category: "Books",
      stock: 40,
    },
    {
      id: 12,
      title: "Product 12",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 300,
      priceBeforeDiscount: 360,
      discount: 17,
      rating: 4,
      reviews: 67,
      category: "Garden",
      stock: 7,
    },
    {
      id: 13,
      title: "Product 13",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 110,
      priceBeforeDiscount: 150,
      discount: 27,
      rating: 3,
      reviews: 34,
      category: "Pet Supplies",
      stock: 9,
    },
    {
      id: 14,
      title: "Product 14",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 275,
      priceBeforeDiscount: 350,
      discount: 21,
      rating: 4,
      reviews: 72,
      category: "Kitchen Appliances",
      stock: 10,
    },
    {
      id: 15,
      title: "Product 15",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 420,
      priceBeforeDiscount: 500,
      discount: 16,
      rating: 5,
      reviews: 103,
      category: "Gaming",
      stock: 4,
    },
    {
      id: 16,
      title: "Product 16",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 130,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 58,
      category: "Office Supplies",
      stock: 28,
    },
    {
      id: 17,
      title: "Product 17",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 90,
      priceBeforeDiscount: 120,
      discount: 25,
      rating: 4,
      reviews: 51,
      category: "Clothing",
      stock: 14,
    },
    {
      id: 18,
      title: "Product 18",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 50,
      priceBeforeDiscount: 70,
      discount: 29,
      rating: 3,
      reviews: 20,
      category: "Accessories",
      stock: 45,
    },
    {
      id: 19,
      title: "Product 19",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 350,
      priceBeforeDiscount: 400,
      discount: 12,
      rating: 5,
      reviews: 112,
      category: "Furniture",
      stock: 6,
    },
    {
      id: 20,
      title: "Product 20",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60",
      price: 260,
      priceBeforeDiscount: 300,
      discount: 13,
      rating: 4,
      reviews: 64,
      category: "Beauty",
      stock: 13,
    },
  ],
};

// Utility function to get unique categories
export const getUniqueCategories = (products) => {
  const categories = products.map((product) => product.category);
  return [...new Set(categories)]; // Return unique categories
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
