import React, { useState } from "react";
import Todo from "../Todo/Todo";
import { Header, TodoContainer, FormContainer } from "./TodoList.styles";
import { AiOutlinePlusCircle } from "react-icons/ai";

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodo("");
  };

  return (
    <div>
      <Header>
        <nav>
          <h1>
            To<span>do</span>
          </h1>
          <p>Sign out</p>
        </nav>
      </Header>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            placeholder="What are you going to do?"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            <AiOutlinePlusCircle />
          </button>
        </form>
      </FormContainer>

      <TodoContainer>
        <Todo />
        <Todo />
        <Todo />
      </TodoContainer>
    </div>
  );
};

export default TodoList;
