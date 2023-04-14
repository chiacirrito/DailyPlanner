import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewDate, updateDate } from "../../redux/actions";
import styles from "./index.module.scss";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.dailyReducer.isEdit);
  const editDate = useSelector((state) => state.dailyReducer.editDate);

  useEffect(() => {
    editDate && setValue(() => editDate);
  }, [editDate]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      dispatch(updateDate(editDate.id, value));
    } else {
      dispatch(addNewDate(value));
    }
    setValue({ what: "" });
    document.getElementById("formDate").reset();
  };

  const changeEvent = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.Form}>
      <form id="formDate" onSubmit={onHandleSubmit}>
        <input
          type="text"
          defaultValue={value?.what}
          id="what"
          name="what"
          onChange={(e) => changeEvent(e)}
          placeholder="What?"
          required
        />
        <input
          type="text"
          defaultValue={value?.where}
          id="where"
          name="where"
          onChange={(e) => changeEvent(e)}
          placeholder="Where?"
        />
        <div className={styles.day}>
          <div className={styles.time}>
            <input
              type="day"
              defaultValue={value?.day}
              id="day"
              name="day"
              onChange={(e) => changeEvent(e)}
              placeholder="Day of the week"
              className={styles.special}
            />
            <input
              type="time"
              defaultValue={value?.time}
              id="time"
              name="time"
              onChange={(e) => changeEvent(e)}
              className={styles.special}
            />
          </div>
        </div>
        <input className={styles.btn} type="submit" value="Add Date" />
      </form>
    </div>
  );
};

export default Form;
