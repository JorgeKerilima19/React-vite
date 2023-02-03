import TasCard from "./TaskCard";

const TaskList = ({tasks}) => {
  if (tasks.length === 0) {
    return <div>No tasks yet</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TasCard task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
