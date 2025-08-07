# Dawn - React 学习脚手架

一个完整配置的 React 学习项目，使用现代技术栈：React Router + Tailwind CSS + shadcn/ui + ESLint

## 🎯 项目特性

- ⚡️ **React Router 7** - 现代化的 React 路由和全栈框架
- 🎨 **Tailwind CSS 4** - 实用优先的 CSS 框架
- 🧩 **shadcn/ui** - 高质量的可复用 UI 组件库
- 📝 **TypeScript** - 类型安全的 JavaScript
- 🔍 **ESLint** - 代码质量检查和自动修复
- 🔄 **热模块替换** - 开发时实时更新
- 📦 **Vite** - 快速的构建工具

## 📁 项目结构详解

```
dawn/
├── app/                          # 应用主目录
│   ├── components/               # UI 组件目录
│   │   └── ui/                  # shadcn/ui 组件
│   │       └── button.tsx       # 按钮组件
│   ├── lib/                     # 工具函数库
│   │   └── utils.ts            # 通用工具函数 (cn 样式合并)
│   ├── routes/                  # 页面路由目录
│   │   ├── +types/             # 路由类型定义
│   │   └── home.tsx            # 首页组件
│   ├── welcome/                 # 欢迎页面组件
│   │   ├── logo-dark.svg       # 深色主题 Logo
│   │   ├── logo-light.svg      # 浅色主题 Logo
│   │   └── welcome.tsx         # 欢迎页面主组件
│   ├── app.css                 # 全局样式文件 (Tailwind + 主题配置)
│   ├── root.tsx                # 应用根组件
│   └── routes.ts               # 路由配置
├── public/                      # 静态资源目录
│   └── favicon.ico             # 网站图标
├── .react-router/              # React Router 生成文件 (自动生成)
├── build/                      # 构建输出目录 (自动生成)
├── node_modules/               # 依赖包目录 (自动生成)
├── components.json             # shadcn/ui 配置文件
├── eslint.config.js            # ESLint 配置文件
├── package.json                # 项目依赖和脚本配置
├── react-router.config.ts      # React Router 配置
├── tsconfig.json               # TypeScript 配置
└── vite.config.ts              # Vite 构建工具配置
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器，支持热更新：

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用

### 可用命令

```bash
# 开发服务器
npm run dev              # 启动开发服务器

# 构建相关
npm run build            # 构建生产版本
npm run start            # 启动生产服务器

# 代码检查
npm run typecheck        # TypeScript 类型检查
npm run lint             # ESLint 代码检查
npm run lint:fix         # 自动修复 ESLint 问题
```

## 🎨 技术栈介绍

### React Router 7
现代化的 React 全栈框架，提供：
- 基于文件的路由系统
- 服务端渲染 (SSR)
- 数据加载和变更
- 类型安全的路由

### Tailwind CSS 4
实用优先的 CSS 框架：
- 原子化的 CSS 类
- 响应式设计
- 深色模式支持
- 高度可定制

### shadcn/ui
基于 Radix UI 的组件库：
- 无障碍访问 (a11y)
- 完全可定制
- TypeScript 支持
- 现代化设计

## 📚 学习路径建议

### 1. 基础概念
- 了解项目结构和各文件作用
- 学习 React Router 的路由概念
- 熟悉 Tailwind CSS 的类名系统

### 2. 组件开发
- 研究 shadcn/ui 组件的使用方式
- 创建自定义组件
- 学习组件间的状态管理

### 3. 路由和导航
- 添加新页面路由
- 实现页面间导航
- 学习数据加载模式

### 4. 样式和主题
- 定制 Tailwind 配置
- 实现深色/浅色主题切换
- 创建响应式布局

## 🔧 扩展建议

### 添加新组件
```bash
# 安装 shadcn/ui 组件
npx shadcn@latest add [component-name]

# 例如：添加卡片组件
npx shadcn@latest add card
```

### 常用组件推荐
```bash
npx shadcn@latest add button card input label
npx shadcn@latest add dropdown-menu dialog toast
npx shadcn@latest add form table pagination
```

## 🏗️ 部署

### Docker 部署
```bash
# 构建镜像
docker build -t dawn-app .

# 运行容器
docker run -p 3000:3000 dawn-app
```

### 手动部署
1. 构建项目：`npm run build`
2. 部署 `build/` 目录到服务器
3. 运行：`npm start`

## 📖 学习资源

- [React 官方文档](https://react.dev/)
- [React 官方中文文档](https://zh-hans.react.dev/)
- [React Router 文档](https://reactrouter.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [shadcn/ui 组件库](https://ui.shadcn.com/)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)

---

🎉 开始你的 React 学习之旅吧！
