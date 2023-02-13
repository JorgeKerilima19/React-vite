import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const {tasks} = useContext(TaskContext);
  if (tasks.length === 0) {
    return <div>No tasks yet</div>;
  }
  return (
    <div className="card-container">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
