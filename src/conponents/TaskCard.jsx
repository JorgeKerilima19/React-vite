export default function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <button onClick={deleteTask}>Complete and Delete</button>
    </div>
  );
}
