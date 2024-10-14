import React, { MouseEvent, useEffect, useState } from "react";
import { Todo } from "../Type/type";

interface ItemProps {
    singleItem: Todo;
    setTodoList: (todos: Todo[]) => void;
    todoList: Todo[];
}

const Item: React.FC<ItemProps> = ({ singleItem, todoList, setTodoList }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);

    const completeTodo = (id: String) => {
        const updatedList = [...todoList]?.map((item) => 
            item?.id === id ? {...item, completed: !item?.completed} : item
        );
        setTodoList(updatedList);
      };

    useEffect(() => {
        setIsChecked(singleItem?.completed);
    }, [singleItem?.completed])
  

    const onCheck = () => {
        setIsChecked(!isChecked);
        completeTodo(singleItem?.id);
    }

    const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
        if(window.confirm("Are you sure you want to delete this task?")) {
            const updatedList = [...todoList].filter((item) => item?.id !== singleItem?.id);
           setTodoList(updatedList);
        }
    }

  return (
    <li onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onCheck} />
        <span>{singleItem?.name}</span>
      </label>
      <button onClick={onDelete} className="btn btn-danger" style={{ display: `${showDelete ? "" : "none"}` }}>
        Delete
      </button>
    </li>
  );
};

export default Item;
