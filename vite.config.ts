import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         "https://new-express-project-1v4n5vxp9-ramesh2041999-gmailcoms-projects.vercel.app",
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [react()],
});
