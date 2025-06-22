
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      remotes: {
        remote_app:
          "https://music-library-hkpd3z2f0-manojs-projects-590e35f7.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: {
      polyfill: false,
    },
  },
});