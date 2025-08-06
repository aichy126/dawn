// 导入 React Router 的 Vite 插件，用于支持 React Router 的构建和开发
import { reactRouter } from "@react-router/dev/vite";
// 导入 Tailwind CSS 的 Vite 插件，用于处理 Tailwind CSS
import tailwindcss from "@tailwindcss/vite";
// 导入 Vite 的配置函数
import { defineConfig } from "vite";
// 导入 TypeScript 路径映射插件，用于支持 tsconfig.json 中的路径映射
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Vite 配置文件
 * 
 * 这个文件配置了 Vite 构建工具的行为，包括插件、开发服务器等
 * Vite 是一个快速的前端构建工具，支持热更新和优化的生产构建
 */
export default defineConfig({
  plugins: [
    // Tailwind CSS 插件：处理 Tailwind CSS 样式
    tailwindcss(),
    // React Router 插件：支持 React Router 的 SSR、文件路由等功能
    reactRouter(),
    // TypeScript 路径插件：支持 tsconfig.json 中定义的路径别名
    tsconfigPaths(),
  ],
});
