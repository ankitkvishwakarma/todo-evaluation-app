import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import FilterBar from "../components/FilterBar";
import { filterByDate } from "../utils/dateUtils";

function Home() {
  const { tasks, addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, priority);
      setTask("");
      setPriority("Medium");
    }
  };

  const filteredTasks = filterByDate(tasks, filter, dateRange);

  return (
    <div className="home">
      <h1>Todo App</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select>
        <button type="submit">➕ Add</button>
      </form>

      {/* Filters */}
      <FilterBar filter={filter} setFilter={setFilter} setDateRange={setDateRange} />

      {/* Tasks */}
      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks found!</p>
        ) : (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </ul>
    </div>
  );
}

export default Home;
