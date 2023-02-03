import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <div>No tasks yet</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
