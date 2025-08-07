import { useState } from "react";

// 涵盖学习目标

// ✅ 状态提升 - 父组件管理子组件状态 (核心)
// ✅ 组件定义 - 函数式组件
// ✅ JSX 语法 - HTML-like 语法
// ✅ Props - 组件间数据传递
// ✅ TypeScript - 类型定义和约束
// ✅ useState Hook - 状态管理
// ✅ 事件处理 - onClick
// ✅ 列表渲染 - map() 方法
// ✅ Fragment - <> </>
// ✅ 数组操作 - map 遍历和更新
// ✅ 回调函数 - 父子组件通信

// 未涵盖学习目标
// 🔲 useEffect - 副作用处理
// 🔲 自定义 Hook - 逻辑复用
// 🔲 Context API - 跨组件状态共享
// 🔲 useReducer - 复杂状态管理
// 🔲 组件生命周期
// 🔲 性能优化 - useMemo, useCallback
// 🔲 表单处理 - 表单验证
// 🔲 HTTP 请求 - fetch API
// 🔲 错误边界 - Error Boundaries

// 方案1: 状态提升 - 父组件管理所有计数器
function CounterWithProps({ count, onAdd, onReset, name }: {
  count: number;
  onAdd: () => void;
  onReset: () => void;
  name: string;
}) {
  return (
    <div>
      <h3>{name}: {count}</h3>
      <button onClick={onAdd}>+1</button>
      <button onClick={onReset}>重置</button>
    </div>
  );
}

export function S03Advanced() {
  // 管理所有计数器的状态
  const [counters, setCounters] = useState([0, 0, 0]); // 3个计数器

  const addCounter = (index: number) => {
    setCounters(prev => prev.map((count, i) => i === index ? count + 1 : count));
  };

  const resetCounter = (index: number) => {
    setCounters(prev => prev.map((count, i) => i === index ? 0 : count));
  };

  // 全局操作
  const addAllCounters = () => {
    setCounters(prev => prev.map(count => count + 1));
  };

  const resetAllCounters = () => {
    setCounters(prev => prev.map(() => 0));
  };

  return (
    <>
      <h1 className="text-3xl font-bold">🎯 统一控制计数器</h1>
      
      <div className="mt-4 space-y-2">
        <button onClick={addAllCounters} className="bg-green-500 text-white px-4 py-2 mr-2">
          全部 +1
        </button>
        <button onClick={resetAllCounters} className="bg-red-500 text-white px-4 py-2">
          全部清零
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {counters.map((count, index) => (
          <CounterWithProps
            key={index}
            count={count}
            onAdd={() => addCounter(index)}
            onReset={() => resetCounter(index)}
            name={`计数器${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-100 rounded">
        <p><strong>解决方案:</strong></p>
        <p>• 状态提升到父组件</p>
        <p>• 父组件统一管理所有计数器</p>
        <p>• 子组件通过 props 接收状态和操作函数</p>
      </div>
    </>
  );
}