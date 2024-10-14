import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import { Todo } from './components/Type/type';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const loadTodoList = async () => {
    const response = await fetch("http://localhost:3001/list");
    const result = await response.json();
    setTodoList(result);
  }

  useEffect(() => {
    loadTodoList();
  }, [])
  
  return (
    <div className="todo-container">
    <div className="todo-wrap">
      <Header todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
      <Footer todoList={todoList} setTodoList={setTodoList} />
    </div>
  </div>
  );
}

export default App;
