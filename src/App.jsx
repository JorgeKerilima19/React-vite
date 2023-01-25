import { tasks as data, tasks } from "./tasks";
import { useState, useEffect } from "react";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTask) {
    setTasks([...tasks, {
      task:taskTask,
      id:tasks.length,
      description: "new Task"
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
