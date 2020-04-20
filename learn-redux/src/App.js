import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosCountainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosCountainer />
    </div>
  );
}

export default App;
