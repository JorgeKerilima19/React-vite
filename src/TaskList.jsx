import { tasks as data, tasks } from "./tasks";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);
  if (task.length === 0) {
    return <div>No tasks yet</div>;
  }
  return (
    <div key={task.id}>
      {task.map((task) => (
        <div>
          <h2>{task.task}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
