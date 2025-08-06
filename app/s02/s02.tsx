import { useEffect, useState } from "react";

// 学习目标: useEffect Hook - 副作用处理

export default function S02() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("页面刚加载");

  // useEffect: 组件挂载后执行
  useEffect(() => {
    setMessage("组件已挂载，开始计数！");
    console.log("S02 组件挂载了");
  }, []); // 空依赖数组，只在挂载时执行一次

  // useEffect: count 变化时执行
  useEffect(() => {
    if (count > 0) {
      setMessage(`你已经点击了 ${count} 次`);
    }
  }, [count]); // 依赖 count，count 变化时执行

  return (
    <>
      <h1 className="text-3xl font-bold">🎯 学习 useEffect</h1>
      <p className="text-lg mt-4">{message}</p>
      <div className="mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          点击计数: {count}
        </button>
      </div>
    </>
  );
}
