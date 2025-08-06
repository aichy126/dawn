// 导入 React Router 配置类型
import type { Config } from "@react-router/dev/config";

/**
 * React Router 配置文件
 * 
 * 这个文件配置 React Router 的行为，包括渲染模式、路由选项等
 */
export default {
  // 服务端渲染 (SSR) 配置
  // 默认启用 SSR，这意味着页面会在服务器上预渲染，提供更好的 SEO 和首次加载性能
  // 如果想要创建单页应用 (SPA)，可以将此设置为 `false`
  ssr: true,
  
  // 其他可用的配置选项包括：
  // basename: "/", // 应用的基础路径
  // future: {}, // 启用实验性功能的标志
  // routes: [], // 自定义路由配置
} satisfies Config;
