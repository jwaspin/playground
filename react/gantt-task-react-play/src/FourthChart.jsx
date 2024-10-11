import { useState } from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const tasks = [
  {
    start: new Date(2024, 9, 11, 8, 0),
    end: new Date(2024, 9, 11, 17, 0),
    name: "Team A",
    id: "1",
    type: "project",
    progress: 0,
    isDisabled: true,
    hideChildren: false,
  },
  {
    start: new Date(2024, 9, 11, 8, 0),
    end: new Date(2024, 9, 11, 10, 0),
    name: "Staff 1 - Task 1",
    id: "2",
    type: "task",
    project: "1",
    progress: 40, // Progress < 0.5, so this will be red
  },
  {
    start: new Date(2024, 9, 11, 11, 0),
    end: new Date(2024, 9, 11, 13, 0),
    name: "Staff 1 - Task 2",
    id: "3",
    type: "task",
    project: "1",
    progress: 70, // Progress > 0.5, so this will be green
  },
  {
    start: new Date(2024, 9, 11, 9, 0),
    end: new Date(2024, 9, 11, 12, 0),
    name: "Staff 2 - Task 1",
    id: "4",
    type: "task",
    project: "1",
    progress: 30, // Progress < 0.5, so this will be red
  },
  {
    start: new Date(2024, 9, 11, 14, 0),
    end: new Date(2024, 9, 11, 16, 0),
    name: "Staff 2 - Task 2",
    id: "5",
    type: "task",
    project: "1",
    progress: 90, // Progress > 0.5, so this will be green
  },
];

// Apply conditional styles based on progress
const applyTaskStyles = (tasks) => {
  return tasks.map((task) => ({
    ...task,
    styles: {
      progressColor: task.progress < 50 ? "red" : "green",
      backgroundColor: task.progress < 50 ? "#ffcccc" : "#ccffcc", // Optional: background color adjustment
    },
  }));
};

const MyGanttChart = () => {
  const [viewMode /* , setViewMode */] = useState(ViewMode.Hour); // Set to Hourly View
  const styledTasks = applyTaskStyles(tasks);

  return (
    <div>
      <Gantt tasks={styledTasks} viewMode={viewMode} />
    </div>
  );
};

export default MyGanttChart;
