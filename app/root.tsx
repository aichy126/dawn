// 从 react-router 导入必需的组件和工具函数
import {
  isRouteErrorResponse,  // 检查是否为路由错误响应的工具函数
  Links,                 // 用于在 head 中渲染 <link> 标签的组件
  Meta,                  // 用于在 head 中渲染 <meta> 标签的组件
  Outlet,                // 用于渲染嵌套路由组件的组件
  Scripts,               // 用于在页面底部注入 JavaScript 的组件
  ScrollRestoration,     // 用于在页面导航时恢复滚动位置的组件
} from "react-router";

// 导入路由类型定义
import type { Route } from "./+types/root";
// 导入全局 CSS 样式（包含 Tailwind CSS 和主题配置）
import "./app.css";

/**
 * links 函数 - 定义要在 HTML <head> 中包含的链接
 * 
 * 这里预连接到 Google Fonts 并加载 Inter 字体
 * preconnect 可以提前建立连接，提高字体加载性能
 */
export const links: Route.LinksFunction = () => [
  // 预连接到 Google Fonts 主域名
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    // 预连接到 Google Fonts 静态资源域名
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    // 加载 Inter 字体样式表
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

/**
 * Layout 组件 - 应用的根布局组件
 * 
 * 这个组件包含了整个应用的 HTML 结构，包括 <html>、<head> 和 <body>
 * 所有页面都会被包裹在这个布局中
 * 
 * @param children - 子组件（通常是路由渲染的页面内容）
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 设置字符编码为 UTF-8 */}
        <meta charSet="utf-8" />
        {/* 设置视口，确保响应式设计在移动设备上正确工作 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 渲染页面的 meta 标签（如 title、description 等） */}
        <Meta />
        {/* 渲染页面的 link 标签（如 CSS、字体等） */}
        <Links />
      </head>
      <body>
        {/* 渲染页面内容 */}
        {children}
        {/* 在页面导航时恢复滚动位置 */}
        <ScrollRestoration />
        {/* 在页面底部注入必要的 JavaScript */}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * App 组件 - 应用的主组件
 * 
 * 这是应用的入口点，使用 <Outlet /> 来渲染当前路由匹配的组件
 * 在 React Router 中，<Outlet /> 是渲染子路由的地方
 */
export default function App() {
  return <Outlet />;
}

/**
 * ErrorBoundary 组件 - 错误边界组件
 * 
 * 当应用中发生未处理的错误时，这个组件会被渲染
 * 它可以捕获路由错误（如 404）和 JavaScript 运行时错误
 * 
 * @param error - 捕获到的错误对象
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // 默认错误消息和详细信息
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  // 检查是否是路由错误响应（如 404、500 等 HTTP 状态码错误）
  if (isRouteErrorResponse(error)) {
    // 如果是 404 错误，显示特定的消息
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } 
  // 在开发环境中，如果是 JavaScript 错误，显示错误详情和堆栈跟踪
  else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      {/* 错误标题 */}
      <h1>{message}</h1>
      {/* 错误详细信息 */}
      <p>{details}</p>
      {/* 在开发环境中显示错误堆栈跟踪 */}
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
