import React from "react";
import "./app.css";
import Habits from "./components/habits";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header count={2}></Header>
      <Habits />
    </div>
  );
}

export default App;
