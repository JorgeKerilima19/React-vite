

export default function TasCard({task}) {
  function deleteTask(){
    alert("task to eliminate "+ "{ "+task.id+" }")
  }
  return (
    <div>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <button onClick={deleteTask}>Complete and Delete</button>
    </div>
  );
}
