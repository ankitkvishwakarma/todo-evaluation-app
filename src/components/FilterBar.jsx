import React from "react";

function FilterBar({ filter, setFilter, setDateRange }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
      <button onClick={() => setFilter("today")} className={filter === "today" ? "active" : ""}>Today</button>
      <button onClick={() => setFilter("week")} className={filter === "week" ? "active" : ""}>This Week</button>
      <button onClick={() => setFilter("range")} className={filter === "range" ? "active" : ""}>Custom Range</button>

      {filter === "range" && (
        <div className="date-range">
          <input type="date" onChange={(e) => setDateRange((p) => ({ ...p, start: e.target.value }))} />
          <input type="date" onChange={(e) => setDateRange((p) => ({ ...p, end: e.target.value }))} />
        </div>
      )}
    </div>
  );
}

export default FilterBar;
