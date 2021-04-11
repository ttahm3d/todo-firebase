import React from "react";
import { TodoWrapper } from "./Todo.styles";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = () => {
  return (
    <TodoWrapper>
      <p>Todo</p>
      <div>
        <BsCheckCircle />
        <AiOutlineDelete />
      </div>
    </TodoWrapper>
  );
};

export default Todo;
