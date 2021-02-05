import React from "react";
import { Provider } from "react-redux";
import Todos from "./Componentes/Todos";
import Users from "./Componentes/Users";
import { store } from "./store";

// Faça uma aplicação que usará 2 apis:
// Consuma a api de todos (https://jsonplaceholder.typicode.com/todos) , envie os dados
// para o redux e mostre os todos na tela em formato de lista com os itens: title e id
// Consuma a api de usuario (https://jsonplaceholder.typicode.com/users/1), envie os
// dados para o redux e mostre o name, o username e o email do usuário
// Crie ao menos 3 componentes: App, Todos e User

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />

        <Todos />
      </Provider>
    </div>
  );
}

export default App;
