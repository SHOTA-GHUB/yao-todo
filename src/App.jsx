import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>本日のやることリスト</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="タスクを入力"
      />
      <button onClick={addTask}>追加</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleDone(index)}>
              {todo.done ? '未完了に戻す' : '完了'}
            </button>
            <button onClick={() => deleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;