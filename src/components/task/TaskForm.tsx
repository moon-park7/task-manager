import { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../types/taskTypes";
import { addTask } from "../../actions/taskActions";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      title,
      description: "",
      isComplete: false,
    };
    dispatch(addTask(newTask));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
