export function filterByDate(tasks, filter, dateRange) {
  const today = new Date();

  if (filter === "today") {
    return tasks.filter(
      (t) => new Date(t.date).toDateString() === today.toDateString()
    );
  } else if (filter === "week") {
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);
    return tasks.filter((t) => new Date(t.date) >= weekAgo);
  } else if (filter === "range" && dateRange.start && dateRange.end) {
    return tasks.filter(
      (t) =>
        new Date(t.date) >= new Date(dateRange.start) &&
        new Date(t.date) <= new Date(dateRange.end)
    );
  }
  return tasks; // default all
}
