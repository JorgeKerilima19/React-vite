import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <h1 className="title">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
