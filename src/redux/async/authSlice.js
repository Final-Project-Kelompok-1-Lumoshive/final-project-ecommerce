import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  user: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authToggle: (state) => {
      state.auth = !state.auth;
    }
  }
})

export const { authToggle } = authSlice.actions;
export default authSlice.reducer;