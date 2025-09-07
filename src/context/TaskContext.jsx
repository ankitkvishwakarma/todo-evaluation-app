import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false, priority, date: new Date() },
    ]);
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleTask = (id) =>
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

  const editTask = (id, newText, newPriority) =>
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, text: newText, priority: newPriority } : t
    ));

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}
