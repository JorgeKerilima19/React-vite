import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task, deleteTask }) {

  const value=useContext(TaskContext);
  console.log(value)

  return (
    <div>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Complete and Delete
      </button>
    </div>
  );
}
