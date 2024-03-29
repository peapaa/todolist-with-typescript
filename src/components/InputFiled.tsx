import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputFiled: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.focus();
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
        ref={inputRef}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFiled;
