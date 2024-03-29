import React, { useState } from "react";
import "./App.css";
import InputFiled from "./components/InputFiled";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setList([
        ...list,
        {
          id: Math.random(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  console.log(todo);
  console.log(list);
  return (
    <div className="App">
      <span className="heading">hello</span>
      <InputFiled todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default App;
