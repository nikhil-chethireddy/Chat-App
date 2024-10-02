import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    addToNotification: (state, action) => {
      state.push(action.payload);
    },
    removeFromNotification: (state, action) => {
      return state.filter((notification) => notification !== action.payload);
    },
    removeAllNotifications: (state) => {
      return (state = []);
    },
  },
});

export const {
  addToNotification,
  removeFromNotification,
  removeAllNotifications,
} = notificationSlice.actions;

export default notificationSlice;
