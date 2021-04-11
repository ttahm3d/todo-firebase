import React, { useState } from "react";
import Todo from "../Todo/Todo";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Header, TodoContainer, FormContainer } from "./TodoList.styles";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { auth, firestore } from "../../firebase.config";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

  const [todos] = useCollectionData(todosRef);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodo("");
    todosRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <Header>
        <nav>
          <h1>
            To<span>do</span>
          </h1>
          <p onClick={signOut}>Sign out</p>
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
