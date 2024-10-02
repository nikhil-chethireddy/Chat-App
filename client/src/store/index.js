import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice";
import conversationsSlice from "./conversationsSlice";
import socketSlice from "./socketSlice";
import notificationsSlice from "./notificationsSlice";

const chatStore = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
    conversations: conversationsSlice.reducer,
    socket: socketSlice.reducer,
    notifications: notificationsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for socket instance
    }),
});

export default chatStore;
