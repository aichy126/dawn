import { useState } from "react";

// 学习目标: 自定义 Hook - 逻辑复用

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
      </div>
    </>
  );
}
