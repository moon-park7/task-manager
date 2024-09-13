import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Task } from "../../types/taskTypes";
import { deleteTask, toggleTask } from "../../actions/taskActions";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.isComplete ? "line-through" : "none",
            }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.title}
          </span>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
