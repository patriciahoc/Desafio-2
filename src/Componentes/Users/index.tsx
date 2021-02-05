import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: any) => state.users.name);
  const username = useSelector((state: any) => state.users.username);
  const email = useSelector((state: any) => state.users.email);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((resposta) =>
        dispatch({ type: "GET_USERS", payload: resposta.data })
      );
  });

  return (
    <div>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Users;
