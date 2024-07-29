import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

import { selectVisibleTasks } from "../../redux/tasksSlice";

export const TaskList = () => {
  // const tasks = useSelector(selectTasks);
  // const textFilter = useSelector(selectTextFilter);
  const visibleTasks = useSelector(selectVisibleTasks);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
