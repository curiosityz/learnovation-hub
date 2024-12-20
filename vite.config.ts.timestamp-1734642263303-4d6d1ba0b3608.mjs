// vite.config.ts
import { defineConfig } from "file:///workspaces/learnovation-hub/node_modules/vite/dist/node/index.js";
import react from "file:///workspaces/learnovation-hub/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/workspaces/learnovation-hub";
var vite_config_default = defineConfig(({ mode }) => {
  console.log("Vite build mode:", mode);
  console.log("Base URL:", mode === "production" ? "/" : "/");
  return {
    base: mode === "production" ? "/" : "/",
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: true,
      // Enable source maps for debugging
      rollupOptions: {
        output: {
          manualChunks: void 0
        }
      }
    },
    server: {
      host: "::",
      port: 8080
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    plugins: [react()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9sZWFybm92YXRpb24taHViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlcy9sZWFybm92YXRpb24taHViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL2xlYXJub3ZhdGlvbi1odWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJWaXRlIGJ1aWxkIG1vZGU6XCIsIG1vZGUpO1xuICBjb25zb2xlLmxvZyhcIkJhc2UgVVJMOlwiLCBtb2RlID09PSAncHJvZHVjdGlvbicgPyBcIi9cIiA6IFwiL1wiKTtcbiAgXG4gIHJldHVybiB7XG4gICAgYmFzZTogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nID8gXCIvXCIgOiBcIi9cIixcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgICAgc291cmNlbWFwOiB0cnVlLCAvLyBFbmFibGUgc291cmNlIG1hcHMgZm9yIGRlYnVnZ2luZ1xuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3M6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IFwiOjpcIixcbiAgICAgIHBvcnQ6IDgwODAsXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsU0FBUyxvQkFBb0I7QUFDblMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxVQUFRLElBQUksb0JBQW9CLElBQUk7QUFDcEMsVUFBUSxJQUFJLGFBQWEsU0FBUyxlQUFlLE1BQU0sR0FBRztBQUUxRCxTQUFPO0FBQUEsSUFDTCxNQUFNLFNBQVMsZUFBZSxNQUFNO0FBQUEsSUFDcEMsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUEsTUFDWCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsUUFDaEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNuQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
