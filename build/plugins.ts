import type {PluginOption} from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// 创建 Vite 插件
export function createVitePlugins(mode: string, {__APP_VERSION__, __APP_BUILD_TIME__}: {
    __APP_VERSION__: string,
    __APP_BUILD_TIME__: string
}): (PluginOption[]) {
    return [
        vue(),
        vueJsx(),
        createHtmlPlugin({
            entry: "src/main.ts",
            minify: true,
            inject: {
                data: {
                    version: __APP_VERSION__,
                    time: __APP_BUILD_TIME__,
                    mode,
                },
            },
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), "src/assets/icons")],
            symbolId: "icon-[dir]-[name]",
        })
    ]
}
