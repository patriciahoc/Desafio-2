import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos.arrayTodos);

  const buscarTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resposta) =>
        dispatch({ type: "GET_TODOS", payload: resposta.data })
      );
  };

  return (
    <div>
      <button onClick={buscarTodos}>To Do</button>
      {todos.map((item: any) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Todos;
