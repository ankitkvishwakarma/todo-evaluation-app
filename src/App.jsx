import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
