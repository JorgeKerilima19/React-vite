import { useState } from "react";

export default function TaskForm({createTask}) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>Update</button>
    </form>
  );
}
