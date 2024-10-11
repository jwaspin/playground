import { useState } from "react";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const tasks = [
  {
    start: new Date(2024, 9, 10), // Months are 0-indexed in JavaScript
    end: new Date(2024, 9, 15),
    name: "Task 1",
    id: "Task1",
    type: "task",
    progress: 45,
    dependencies: [],
  },
  {
    start: new Date(2024, 9, 16),
    end: new Date(2024, 9, 20),
    name: "Task 2",
    id: "Task2",
    type: "task",
    progress: 20,
    dependencies: [],
  },
];

const MyGanttChart = () => {
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const handleTaskChange = (task) => {
    const updatedTasks = currentTasks.map((t) => (t.id === task.id ? task : t));
    setCurrentTasks(updatedTasks);
  };

  return (
    <div>
      <Gantt tasks={currentTasks} onDateChange={handleTaskChange} />
      <div>
        <h2>Tasks</h2>
        <ul>
          {currentTasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.start.toDateString()} to{" "}
              {task.end.toDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyGanttChart;
