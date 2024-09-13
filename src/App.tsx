import "./App.css";
import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/task/TaskList";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
