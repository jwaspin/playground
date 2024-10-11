import { useState } from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const tasks = [
  {
    start: new Date(2024, 9, 11, 8, 0), // Team A starts at 8:00 AM
    end: new Date(2024, 9, 11, 17, 0), // Team A ends at 5:00 PM
    name: "Team A",
    id: "1",
    type: "project",
    progress: 0,
    isDisabled: true,
    hideChildren: false,
  },
  {
    start: new Date(2024, 9, 11, 8, 0), // Staff 1 Task 1
    end: new Date(2024, 9, 11, 10, 0),
    name: "Staff 1 - Task 1",
    id: "2",
    type: "task",
    project: "1", // Parent is 'Team A'
    progress: 60,
  },
  {
    start: new Date(2024, 9, 11, 11, 0), // Staff 1 Task 2
    end: new Date(2024, 9, 11, 13, 0),
    name: "Staff 1 - Task 2",
    id: "3",
    type: "task",
    project: "1",
    progress: 30,
  },
  {
    start: new Date(2024, 9, 11, 9, 0), // Staff 2 Task 1
    end: new Date(2024, 9, 11, 12, 0),
    name: "Staff 2 - Task 1",
    id: "4",
    type: "task",
    project: "1",
    progress: 50,
  },
  {
    start: new Date(2024, 9, 11, 14, 0), // Staff 2 Task 2
    end: new Date(2024, 9, 11, 16, 0),
    name: "Staff 2 - Task 2",
    id: "5",
    type: "task",
    project: "1",
    progress: 80,
  },
];

const MyGanttChart = () => {
  const [viewMode /* , setViewMode */] = useState(ViewMode.Hour); // Set to Hourly View

  return (
    <div>
      <Gantt tasks={tasks} viewMode={viewMode} />
    </div>
  );
};

export default MyGanttChart;
