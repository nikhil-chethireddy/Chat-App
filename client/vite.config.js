import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === "production";
const apiURL = isProduction
  ? "https://chat-app-1g5w.onrender.com"
  : "http://localhost:5000";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: apiURL,
        changeOrigin: true,
      },
    },
  },
});
