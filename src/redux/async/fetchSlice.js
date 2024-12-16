import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Async actions


// Initial state
const initialState = {
    data: ["1", "2", "3"],
  loading: false,
  error: null,
};

// Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
});

export default fetchSlice.reducer;