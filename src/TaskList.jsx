

const TaskList = ({tasks}) => {
  if (tasks.length === 0) {
    return <div>No tasks yet</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.task}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
