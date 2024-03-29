import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ list, setList }) => {
  return (
    <div className="todos">
      {list.map((item) => (
        <SingleTodo todo={item} key={item.id} list={list} setList={setList} />
      ))}
    </div>
  );
};

export default TodoList;
