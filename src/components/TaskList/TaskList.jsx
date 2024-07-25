import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
