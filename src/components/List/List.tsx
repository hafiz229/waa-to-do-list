import React from "react";
import Item from "../Item/Item";
import { Todo } from "../Type/type";

interface ListProps {
    todoList: Todo[];
    setTodoList: (todos: Todo[]) => void;
}

const List: React.FC<ListProps> = ({todoList, setTodoList}) => {

  return (
    <ul className="todo-main">
      {
        todoList?.map((item: Todo, index: number) => (
            <Item key={index} singleItem={item} todoList={todoList} setTodoList={setTodoList} />
        ))
      }
    </ul>
  );
};

export default List;
