import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    langToggle: (state) => {
      state.lang = state.lang === "en" ? "id" : "en";
    }
  }
})

export const { langToggle } = langSlice.actions;
export default langSlice.reducer;