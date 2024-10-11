import { Gantt, ViewMode } from "gantt-task-react";
import { useState } from "react";

import "gantt-task-react/dist/index.css";

const tasks = [
  {
    id: "Call1",
    name: "Call 1",
    start: new Date(2024, 9, 11, 9, 0),
    end: new Date(2024, 9, 11, 9, 30),
    type: "task",
    progress: 100,
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Processing1",
    name: "Processing",
    start: new Date(2024, 9, 11, 10, 0),
    end: new Date(2024, 9, 11, 10, 30),
    type: "task",
    progress: 100,
    styles: { backgroundColor: "#ffc658" },
    dependencies: ["Call1"],
  },
];

export default function CustomGanttChart() {
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const handleTaskChange = (task) => {
    const updatedTasks = currentTasks.map((t) => (t.id === task.id ? task : t));
    setCurrentTasks(updatedTasks);
  };

  return (
    <div>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Hour}
        onDateChange={handleTaskChange}
      />
    </div>
  );
}
