import { Error } from "./Error/Error";
import Loader from "./Loader/Loader";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/tasksOps";
import TextFilter from "./TextFilter/TextFilter";

// Імпорти компонентів

export const App = () => {
  const dispatch = useDispatch();
  //селектори для лоадинг и ерроу для того щоб відобразити ніжче в інтерфейсі

  useEffect(() => {
    const operation = fetchTasks();
    dispatch(operation);
  }, [dispatch]);
  return (
    <div>
      <h1>HTTp requests</h1>
      <TaskForm />
      <TextFilter />
      <TaskList />
      <Error />
      <Loader />
    </div>
  );
};
