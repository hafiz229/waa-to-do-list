import React, { ChangeEvent } from "react";
import { Todo } from "../Type/type";

interface FooterProps {
    todoList: Todo[];
    setTodoList: (todos: Todo[]) => void;
}

const Footer: React.FC<FooterProps> = ({todoList, setTodoList}) => {
    const completedCount = todoList.filter((item) => item?.completed).length;
    const toDoListLength = todoList?.length;
    const check = completedCount === toDoListLength;

    const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const updatedList = todoList.map((item) => ({
            ...item,
            completed: checked,
          }));
      
        setTodoList(updatedList);
      };

    const onDelete = () => {
        if(window.confirm("Are you sure you want to delete all the finished task?")) {
            const updatedList = [...todoList]?.filter((item) => item?.completed !== true);
            setTodoList(updatedList);
        }
    }

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={check && todoList?.length !== 0} onChange={onCheck} />
      </label>
      <span>
        <span>Finished {completedCount ?? 0}</span> / total {todoList?.length ?? 0}
      </span>
      <button onClick={onDelete} className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
};

export default Footer;
