

export default function TasCard({task}) {
  return (
    <div>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
    </div>
  );
}
