import { tasks as data, tasks } from "./tasks";
import { useState, useEffect } from "react";

import TaskList from "./conponents/TaskList";
import TaskForm from "./conponents/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      task:task.task,
      id:tasks.length,
      description: task.description 
    }]);
  }

  return (
    <>
      <h1>Hello World from Vite</h1>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
