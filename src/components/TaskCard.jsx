import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import PriorityBadge from "./PriorityBadge";

function TaskCard({ task }) {
  const { deleteTask, toggleTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newPriority, setNewPriority] = useState(task.priority);

  const handleSave = () => {
    if (newText.trim()) {
      editTask(task.id, newText, newPriority);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-card ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />

      {isEditing ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} className="edit-input" />
          <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>
        </>
      ) : (
        <span>
          <PriorityBadge priority={task.priority} /> {task.text}
        </span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>💾 Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)}>❌ Delete</button>
      </div>
    </li>
  );
}

export default TaskCard;
