// 导入 ESLint 基础 JavaScript 推荐配置
import js from '@eslint/js'
// 导入 FlatCompat 用于兼容旧版本的 ESLint 配置格式（虽然这里没有直接使用）
import { FlatCompat } from '@eslint/eslintrc'
// 导入 React ESLint 插件，提供 React 相关的代码检查规则
import react from 'eslint-plugin-react'
// 导入 React Hooks ESLint 插件，确保 Hooks 使用符合规范
import reactHooks from 'eslint-plugin-react-hooks'
// 导入 React Refresh ESLint 插件，确保组件可以正确地进行热更新
import reactRefresh from 'eslint-plugin-react-refresh'
// 导入 TypeScript ESLint 配置和解析器
import tseslint from 'typescript-eslint'

// 创建兼容旧配置格式的实例（预留给未来可能的配置需要）
const compat = new FlatCompat()

/**
 * ESLint 配置文件
 * 
 * 使用新的 Flat Config 格式，为 React + TypeScript 项目提供完整的代码检查规则
 * 这个配置确保代码质量、React 最佳实践和 TypeScript 类型安全
 */
export default tseslint.config(
  // 忽略这些目录，不进行 ESLint 检查
  { ignores: ['dist', 'build', 'node_modules', '.react-router'] },
  {
    // 继承推荐的基础配置
    extends: [
      js.configs.recommended,        // JavaScript 基础推荐规则
      ...tseslint.configs.recommended // TypeScript 推荐规则
    ],
    
    // 指定要检查的文件类型：TypeScript 和 TypeScript React 文件
    files: ['**/*.{ts,tsx}'],
    
    // 语言选项配置
    languageOptions: {
      ecmaVersion: 2020,  // 支持 ES2020 语法特性
      globals: {
        React: 'readonly', // 将 React 设置为只读全局变量
      },
    },
    
    // 插件配置：启用各种检查插件
    plugins: {
      react,                           // React 插件
      'react-hooks': reactHooks,       // React Hooks 插件
      'react-refresh': reactRefresh,   // React 热更新插件
    },
    
    // 具体的检查规则配置
    rules: {
      // 启用 React Hooks 的所有推荐规则（如依赖数组检查等）
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh 规则：确保文件只导出 React 组件以支持热更新
      // 设置为警告级别，允许导出常量
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // 关闭 React in JSX scope 规则，因为 React 17+ 不需要手动导入 React
      'react/react-in-jsx-scope': 'off',
      
      // 关闭 prop-types 检查，因为我们使用 TypeScript 进行类型检查
      'react/prop-types': 'off',
      
      // TypeScript 未使用变量规则：允许以下划线开头的参数（常用于占位参数）
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }, // 忽略以 _ 开头的参数，如 _args
      ],
    },
    
    // 插件设置
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },
)