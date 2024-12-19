// vite.config.ts
import { defineConfig } from "file:///workspaces/learnovation-hub/node_modules/vite/dist/node/index.js";
import react from "file:///workspaces/learnovation-hub/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/workspaces/learnovation-hub";
var vite_config_default = defineConfig(({ mode }) => {
  console.log("Vite build mode:", mode);
  console.log("Base URL:", mode === "production" ? "/learnovation-hub/" : "/");
  return {
    base: mode === "production" ? "/learnovation-hub/" : "/",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9sZWFybm92YXRpb24taHViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlcy9sZWFybm92YXRpb24taHViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL2xlYXJub3ZhdGlvbi1odWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJWaXRlIGJ1aWxkIG1vZGU6XCIsIG1vZGUpO1xuICBjb25zb2xlLmxvZyhcIkJhc2UgVVJMOlwiLCBtb2RlID09PSAncHJvZHVjdGlvbicgPyBcIi9sZWFybm92YXRpb24taHViL1wiIDogXCIvXCIpO1xuICBcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBtb2RlID09PSAncHJvZHVjdGlvbicgPyBcIi9sZWFybm92YXRpb24taHViL1wiIDogXCIvXCIsXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxuICAgICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSwgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBkZWJ1Z2dpbmdcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjo6XCIsXG4gICAgICBwb3J0OiA4MDgwLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNRLFNBQVMsb0JBQW9CO0FBQ25TLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsVUFBUSxJQUFJLG9CQUFvQixJQUFJO0FBQ3BDLFVBQVEsSUFBSSxhQUFhLFNBQVMsZUFBZSx1QkFBdUIsR0FBRztBQUUzRSxTQUFPO0FBQUEsSUFDTCxNQUFNLFNBQVMsZUFBZSx1QkFBdUI7QUFBQSxJQUNyRCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ25CO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
