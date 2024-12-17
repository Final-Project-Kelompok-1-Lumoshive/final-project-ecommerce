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
  loading: false,
  error: null,
};

// Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
});

export default fetchSlice.reducer;
