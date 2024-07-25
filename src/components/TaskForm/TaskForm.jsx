import { Field, Form, Formik } from "formik";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksOps";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values); // те що користув ввів в інпут
    dispatch(addTask(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          name="text"
          placeholder="Enter task text..."
        />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
};
