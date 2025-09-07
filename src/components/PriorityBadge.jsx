import React from "react";
import "./PriorityBadge.css"; // optional CSS module

function PriorityBadge({ priority }) {
  return (
    <span className={`priority-badge ${priority.toLowerCase()}`}>
      <span className="dot"></span> {priority}
    </span>
  );
}

export default PriorityBadge;
