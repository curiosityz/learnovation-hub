import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  console.log("Vite build mode:", mode);
  console.log("Base URL:", mode === 'production' ? "/learnovation-hub/" : "/");
  
  return {
    base: mode === 'production' ? "/learnovation-hub/" : "/",
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true, // Enable source maps for debugging
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react()],
  };
});