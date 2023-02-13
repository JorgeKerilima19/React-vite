import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      task,
      description,
    });
    setDescription("");
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        type="text"
        placeholder="Add new task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <textarea
        className="form-textarea"
        placeholder="Write your task description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="form-button">Update</button>
    </form>
  );
}
