// 导入路由类型定义
import type { Route } from "./+types/home";
// 导入欢迎页面组件
import { Welcome } from "../welcome/welcome";

/**
 * meta 函数 - 定义页面的元数据
 * 
 * 这个函数用于设置页面的 <title> 和 <meta> 标签
 * 这些信息对 SEO 和浏览器标签页显示非常重要
 * 
 * @param _args - 路由元数据参数（这里暂时不使用，所以用下划线前缀）
 * @returns 包含页面元数据的数组
 */
export function meta(_args: Route.MetaArgs) {
  return [
    // 设置页面标题（显示在浏览器标签页上）
    { title: "New React Router App" },
    // 设置页面描述（用于 SEO 和社交媒体分享）
    { name: "description", content: "Welcome to React Router!" },
  ];
}

/**
 * Home 组件 - 首页组件
 * 
 * 这是应用的首页，当用户访问根路径 "/" 时显示
 * 它渲染了 Welcome 组件来展示欢迎页面
 */
export default function Home() {
  return <Welcome />;
}
