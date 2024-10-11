import { Gantt, ViewMode } from "gantt-task-react";

import "gantt-task-react/dist/index.css";

const tasks = [
  {
    id: "Doctor1",
    name: "Doctor 1",
    start: new Date(2024, 9, 11, 9, 0),
    end: new Date(2024, 9, 11, 14, 30),
    type: "task",
    progress: 20,
    tooltip: "TAT: 1 min",
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Doctor2",
    name: "Doctor 2",
    start: new Date(2024, 9, 11, 12, 0),
    end: new Date(2024, 9, 11, 13, 0),
    type: "task",
    progress: 50,
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Doctor3",
    name: "Doctor 3",
    start: new Date(2024, 9, 11, 9, 0),
    end: new Date(2024, 9, 11, 10, 30),
    type: "task",
    progress: 75,
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Doctor4",
    name: "Doctor 4",
    start: new Date(2024, 9, 11, 13, 0),
    end: new Date(2024, 9, 11, 15, 0),
    type: "task",
    progress: 60,
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Doctor5",
    name: "Doctor 5",
    start: new Date(2024, 9, 11, 10, 0),
    end: new Date(2024, 9, 11, 11, 30),
    type: "task",
    progress: 40,
    styles: { backgroundColor: "#82ca9d" },
  },
  {
    id: "Doctor6",
    name: "Doctor 6",
    start: new Date(2024, 9, 11, 15, 0),
    end: new Date(2024, 9, 11, 16, 0),
    type: "task",
    progress: 80,
    styles: { backgroundColor: "#82ca9d" },
  },
];

export default function CustomGanttChart() {
  return (
    <div>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Hour}
        columnWidth={60}
        rtl={false}
      />
    </div>
  );
}
