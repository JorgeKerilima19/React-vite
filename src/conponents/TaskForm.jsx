import { useState } from "react";

export default function TaskForm({ createTask }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      task,
      description
    }); 
    setDescription("");
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <textarea
        placeholder="Write your task description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Update</button>
    </form>
  );
}