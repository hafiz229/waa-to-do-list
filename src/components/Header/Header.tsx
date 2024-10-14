import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Type/type";

interface HeaderProps {
    todoList: Todo[];
    setTodoList: (todos: Todo[]) => void;
}

const Header: React.FC<HeaderProps> = ({todoList, setTodoList}) => {
  const [taskName, setTaskName] = useState("");

  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  }

  const addItem = async (itemName: string) => {
    const newItem = { id: uuidv4(), name: itemName, completed: false };

    setTodoList([newItem, ...todoList]);
    setTaskName("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        if(!taskName) {
            alert("Please enter a task name")
        } else {
            addItem(taskName);
        }
    }
  };
  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" value={taskName} onChange={onTaskChange} onKeyDown={onKeyDown} />
    </div>
  );
};

export default Header;
