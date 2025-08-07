import { useState } from "react";
import { S03Advanced } from "./s03-advanced";

// 涵盖学习目标

// ✅ 自定义 Hook - 逻辑复用 (核心)
// ✅ 组件定义 - 函数式组件
// ✅ JSX 语法 - HTML-like 语法
// ✅ Props - 组件间数据传递
// ✅ TypeScript - 类型定义和约束
// ✅ useState Hook - 状态管理
// ✅ 事件处理 - onClick
// ✅ 条件渲染 - if 判断
// ✅ 列表渲染 - map() 方法
// ✅ Fragment - <> </>
// ✅ 状态提升 - 父组件管理子组件状态

// 未涵盖学习目标
// 🔲 useEffect - 副作用处理
// 🔲 Context API - 跨组件状态共享
// 🔲 useReducer - 复杂状态管理
// 🔲 组件生命周期
// 🔲 性能优化 - useMemo, useCallback
// 🔲 表单处理 - 表单验证
// 🔲 HTTP 请求 - fetch API
// 🔲 错误边界 - Error Boundaries

// 🎯 自定义 Hook: 简单计数器
function useCounter() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const reset = () => setCount(0);

  return { count, add, reset };
}

// 使用自定义 Hook 的组件1
function Counter1() {
  const { count, add, reset } = useCounter();

  return (
    <div>
      <h3>计数器1: {count}</h3>
      <button onClick={add}>+1</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}

// 使用自定义 Hook 的组件2
function Counter2() {
  const { count, add, reset } = useCounter();

  return (
    <div>
      <h3>计数器2: {count}</h3>
      <button onClick={add}>加一</button>
      <button onClick={reset}>归零</button>
    </div>
  );
}

export default function S03() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  if (showAdvanced) {
    return (
      <div>
        <button 
          onClick={() => setShowAdvanced(false)}
          className="mb-4 bg-gray-500 text-white px-4 py-2"
        >
          ← 回到基础版
        </button>
        <S03Advanced />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold">🎣 自定义 Hook</h1>
      <p>同一个 Hook，不同组件使用，状态独立</p>

      <div className="mt-4 space-y-4">
        <Counter1 />
        <Counter2 />
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p><strong>关键点:</strong></p>
        <p>• useCounter() 是自定义 Hook</p>
        <p>• 两个组件使用同一个 Hook</p>
        <p>• 但它们的状态是独立的</p>
        
        <button 
          onClick={() => setShowAdvanced(true)}
          className="mt-3 bg-blue-500 text-white px-4 py-2"
        >
          看高级版：如何统一控制? →
        </button>
      </div>
    </>
  );
}
