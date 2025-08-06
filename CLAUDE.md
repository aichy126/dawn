# Claude Code 配置文件

这是一个 React 学习项目，使用现代技术栈：React Router + Tailwind CSS + shadcn/ui + ESLint

## 项目信息

**项目名称**: Dawn - React 学习脚手架  
**技术栈**: React Router 7, Tailwind CSS 4, shadcn/ui, TypeScript, ESLint  
**构建工具**: Vite  
**包管理器**: npm

## 开发命令

```bash
# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 自动修复代码问题
npm run lint:fix
```

## 项目结构

- `app/` - 应用主目录
  - `components/ui/` - shadcn/ui 组件库
  - `lib/` - 工具函数 (utils.ts 包含 cn 函数)
  - `routes/` - 页面路由组件
  - `welcome/` - 欢迎页面组件
  - `app.css` - 全局样式和 Tailwind 配置
  - `root.tsx` - 应用根组件和布局
- `public/` - 静态资源目录
- `components.json` - shadcn/ui 配置文件
- `eslint.config.js` - ESLint 配置
- `vite.config.ts` - Vite 构建配置
- `react-router.config.ts` - React Router 配置

## 常用任务

当需要添加新的 shadcn/ui 组件时：
```bash
npx shadcn@latest add [component-name]
```

推荐的组件：
```bash
npx shadcn@latest add button card input label
npx shadcn@latest add dropdown-menu dialog toast
npx shadcn@latest add form table pagination
```

## 学习重点

1. **React Router**: 文件路由、数据加载、SSR
2. **Tailwind CSS**: 原子化样式、响应式设计、深色模式
3. **shadcn/ui**: 组件库使用、定制化、可访问性
4. **TypeScript**: 类型安全、路由类型定义
5. **Vite**: 构建优化、热更新、插件系统

## 注意事项

- 项目默认启用 SSR (服务端渲染)
- ESLint 配置允许最多 10 个警告
- 所有关键文件都有详细的中文注释
- 支持深色/浅色主题切换
- 使用 Inter 字体提升视觉效果