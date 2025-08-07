import { createContext, useContext, useState } from "react";

// 涵盖学习目标

// ✅ Context API - 跨组件状态共享 (核心)
// ✅ 组件定义 - 函数式组件  
// ✅ JSX 语法 - HTML-like 语法
// ✅ Props - 组件间数据传递
// ✅ TypeScript - 类型定义和约束
// ✅ useState Hook - 状态管理
// ✅ useContext Hook - 消费 Context
// ✅ createContext - 创建 Context
// ✅ 事件处理 - onClick
// ✅ Fragment - <> </>
// ✅ Provider 模式 - 提供全局状态

// 未涵盖学习目标
// 🔲 useEffect - 副作用处理
// 🔲 自定义 Hook - 逻辑复用
// 🔲 useReducer - 复杂状态管理
// 🔲 组件生命周期
// 🔲 性能优化 - useMemo, useCallback
// 🔲 表单处理 - 表单验证
// 🔲 HTTP 请求 - fetch API
// 🔲 错误边界 - Error Boundaries

// 🎯 第一步：创建 Context
const UserContext = createContext<{
  user: string;
  setUser: (user: string) => void;
} | null>(null);

// 🎯 第二步：创建 Provider 组件
function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState("游客");
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 🎯 第三步：创建自定义 Hook 方便使用
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}

// 组件 A：用户信息显示
function UserInfo() {
  const { user } = useUser();
  
  return (
    <div className="border p-4 rounded bg-blue-50">
      <h3 className="font-semibold">👤 用户信息</h3>
      <p>当前用户: {user}</p>
    </div>
  );
}

// 组件 B：用户名修改
function UserEditor() {
  const { user, setUser } = useUser();
  
  return (
    <div className="border p-4 rounded bg-green-50">
      <h3 className="font-semibold">✏️ 用户编辑</h3>
      <p>当前: {user}</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => setUser("小明")} className="bg-blue-500 text-white px-3 py-1 rounded">
          设为小明
        </button>
        <button onClick={() => setUser("小红")} className="bg-pink-500 text-white px-3 py-1 rounded">
          设为小红
        </button>
        <button onClick={() => setUser("游客")} className="bg-gray-500 text-white px-3 py-1 rounded">
          重置
        </button>
      </div>
    </div>
  );
}

// 组件 C：嵌套很深的组件也能访问
function DeepChild() {
  const { user } = useUser();
  
  return (
    <div className="border p-4 rounded bg-yellow-50">
      <h3 className="font-semibold">🏠 深层组件</h3>
      <p>我在很深的组件里，但也能获取用户: {user}</p>
    </div>
  );
}

function NestedComponent() {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-2">这是嵌套组件，里面还有更深的组件</p>
      <DeepChild />
    </div>
  );
}

export default function S04() {
  return (
    <UserProvider>
      <h1 className="text-3xl font-bold mb-6">🌐 Context API</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">什么是 Context API?</h2>
          <p className="text-gray-700 mb-4">
            Context 提供了一种在组件间共享数据的方式，而不必逐层传递 props。
            适合共享主题、用户信息、语言设置等全局数据。
          </p>
        </div>

        <UserInfo />
        <UserEditor />
        <NestedComponent />

        <div className="bg-blue-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">🎯 Context API 三步曲:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>createContext() - 创建 Context</li>
            <li>Provider - 包装组件，提供数据</li>
            <li>useContext() - 在子组件中使用数据</li>
          </ol>
          
          <div className="mt-4">
            <h4 className="font-semibold">优点:</h4>
            <ul className="list-disc list-inside text-sm">
              <li>避免 props 逐层传递</li>
              <li>全局状态管理</li>
              <li>组件解耦</li>
            </ul>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}