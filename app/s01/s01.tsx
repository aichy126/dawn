
import { useState } from "react";


//涵盖学习目标

// ✅ 组件定义 - 函数式组件
// ✅ JSX 语法 - HTML-like 语法
// ✅ Props - 组件间数据传递
// ✅ TypeScript - 类型定义和约束
// ✅ useState Hook - 状态管理
// ✅ 事件处理 - onClick, onChange
// ✅ 条件渲染 - if 判断
// ✅ 列表渲染 - map() 方法
// ✅ 受控组件 - input 的 value/onChange
// ✅ 状态更新 - 展开运算符创建新数组
// ✅ Fragment - <> </>

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


function AddButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>新增</button>;
}

function AddInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <input
      type="text"
      placeholder="add something..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function ShowList({ list }: { list: string[] }) {
  const listItems = list.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <ul>{listItems}</ul>
  )
}

export default function S01() {
  const msg = "🧾 my todo list";
  const [todolist, setTodolist] = useState<string[]>(["1. 创建项目", "2. 配置路由"]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    const todoItem = inputValue.trim();
    if (todoItem) {
      setTodolist([...todolist, todoItem]);
      setInputValue(""); // 清空输入框
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold">{msg}</h1>
      <AddInput value={inputValue} onChange={setInputValue} />
      <AddButton onClick={handleAddTodo} />
      <ShowList list={todolist} />
    </>
  );
}
