import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("chat-user")) || null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.user = action.payload;
    },
    removeItem: (state) => {
      state.user = null;
    },
  },
});

export const { setItem, removeItem } = authUserSlice.actions;

export default authUserSlice;
