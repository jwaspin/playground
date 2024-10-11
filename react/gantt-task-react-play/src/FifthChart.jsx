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
    start: new Date(2024, 9, 11, 8, 0), // Morning activity: 8:00 AM - 10:00 AM
    end: new Date(2024, 9, 11, 10, 0),
    name: "Staff A - Morning Task",
    id: "2",
    type: "task",
    project: "1",
    progress: 40,
  },
  {
    start: new Date(2024, 9, 11, 12, 0), // Afternoon activity: 12:00 PM - 2:00 PM
    end: new Date(2024, 9, 11, 14, 0),
    name: "Staff A - Afternoon Task",
    id: "3",
    type: "task",
    project: "1",
    progress: 70,
  },
  {
    start: new Date(2024, 9, 11, 18, 0), // Dinner activity: 6:00 PM - 8:00 PM
    end: new Date(2024, 9, 11, 20, 0),
    name: "Staff A - Dinner Task",
    id: "4",
    type: "task",
    project: "1",
    progress: 90,
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
