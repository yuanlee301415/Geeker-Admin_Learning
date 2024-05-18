import type { UserConfig, ConfigEnv } from "vite";

import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import dayjs from "dayjs";
import { createVitePlugins } from "./build/plugins";

// @ts-ignore
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const {
    VITE_PORT,
    VITE_INTERNAL_VERSION,
    VITE_BASE_API,
    VITE_PROXY,
    VITE_PREVIEW_PROXY
  } = env;

  const __APP_VERSION__ = [pkg.version, VITE_INTERNAL_VERSION].join(".");
  const __APP_BUILD_TIME__ = new Date().toISOString();
  const __APP_INFO__ = {
    name: pkg.name,
    version: __APP_VERSION__,
    buildTime: dayjs(__APP_BUILD_TIME__).format('YYYY-MM-DD HH:mm:ss'),
    dependencies: pkg.dependencies,
    devDependencies: pkg.devDependencies
  };
  console.log("env:\n", env);

  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(__APP_VERSION__),
      __APP_BUILD_TIME__: JSON.stringify(__APP_BUILD_TIME__),
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: createVitePlugins(mode, {
      __APP_VERSION__,
      __APP_BUILD_TIME__
    }),
    server: {
      port: Number(VITE_PORT),
      proxy:
          VITE_PROXY
          ? {
              [VITE_BASE_API]: {
                target: VITE_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\//, ""),
              },
            }
          : void 0,
    },
    preview: {
      proxy:
          VITE_PREVIEW_PROXY
          ? {
              [VITE_BASE_API]: {
                target: VITE_PREVIEW_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\//, ""),
              },
            }
          : void 0,
    },
  };
});
