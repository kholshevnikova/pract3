import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";

export default function TextFilter() {
  const id = useId();
  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);
  const handleChange = (event) => {
    dispatch(changeTextFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input type="text" id={id} onChange={handleChange} value={textFilter} />
    </div>
  );
}
