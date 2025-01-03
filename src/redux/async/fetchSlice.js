import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Async actions

// Initial state
const initialState = {
  banners: [
    "https://www.droidlime.com/wp-content/uploads/2024/05/Asus-ROG-Strix-G12.jpg",
    "https://rog.asus.com/media/1704423805683.jpg",
    "https://i.ytimg.com/vi/PFQZErHiRs8/maxresdefault.jpg",
    "https://www.droidlime.com/wp-content/uploads/2024/05/Asus-ROG-Strix-G12.jpg",
    "https://rog.asus.com/media/1704423805683.jpg",
    "https://i.ytimg.com/vi/PFQZErHiRs8/maxresdefault.jpg",
  ],
  orders: [
    {
      id: 1,
      product: "Asus ROG Strix G12",
      image: "https://rog.asus.com/media/1704423805683.jpg",
      quantity: 1,
      status: "created",
    },
    {
      id: 2,
      product: "Asus ROG Strix G12",
      image: "https://rog.asus.com/media/1704423805683.jpg",
      quantity: 1,
      status: "process",
    },
    {
      id: 3,
      product: "Asus ROG Strix G12",
      image: "https://rog.asus.com/media/1704423805683.jpg",
      quantity: 1,
      status: "success",
    },
  ],
  addresses: [
    {
      id: 1,
      name: "John Doe",
      address: "Jl. Raya No. 123, Jakarta",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "Jl. Raya No. 456, Bandung kjfsb fuoa fiuasgf iagfiagsfiuasg",
      email: "jane.smith@example.com",
    }
  ],
  category: [
    {name: "Electronics", icon: "https://img.icons8.com/ios/50/laptop.png"},
    {name: "Fashion", icon: "https://cdn.icon-icons.com/icons2/1118/PNG/512/1486145173-dress_79394.png"},
    {name: "Garden", icon: "https://icon-library.com/images/garden-icon-png/garden-icon-png-1.jpg"},
    {name: "Furniture", icon: "https://icon-library.com/images/furniture-icon-png/furniture-icon-png-8.jpg"},
    {name: "Accessories", icon: "https://icon-library.com/images/diamond-ring-icon-png/diamond-ring-icon-png-10.jpg"},
    {name: "Beauty", icon: "https://icon-library.com/images/icon-lipstick/icon-lipstick-28.jpg"},
    {name: "Sport", icon: "https://icon-library.com/images/soccerball-icon/soccerball-icon-8.jpg"},
    {name: "Book", icon: "https://icon-library.com/images/small-book-icon/small-book-icon-0.jpg"},
  ],
  recommend:[
    {
      id: 1,
      name: "Asus ROG Strix G12",
      image: "https://www.droidlime.com/wp-content/uploads/2024/05/Asus-ROG-Strix-G12.jpg",
    },
    {
      id: 2,
      name: "Asus ROG Strix G12",
      image: "https://rog.asus.com/media/1704423805683.jpg",
    },
    {
      id: 3,
      name: "Asus ROG Strix G12",
      image: "https://i.ytimg.com/vi/PFQZErHiRs8/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Asus ROG Strix G12",
      image: "https://rog.asus.com/media/1704423805683.jpg",
    },
  ],
  loading: false,
  error: null,
};

// Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
});

export default fetchSlice.reducer;
