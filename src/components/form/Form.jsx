import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const Form = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_DATE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        what,
        where,
        day,
        time,
        type,
      },
    });
    setWhat(() => "");
    setWhere(() => "");
    setDay(() => "");
    setTime(() => "");
    setType(() => "");
  };

  return (
    <div className={styles.Form}>
      <form id="formDate" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={what}
          id="what"
          name="what"
          onChange={(e) => setWhat(() => e.target.value)}
          placeholder="What?"
          required
        />
        <input
          type="text"
          value={where}
          id="where"
          name="where"
          onChange={(e) => setWhere(() => e.target.value)}
          placeholder="Where?"
        />
        <div className={styles.day}>
          <div className={styles.time}>
            <input
              type="day"
              value={day}
              id="day"
              name="day"
              onChange={(e) => setDay(() => e.target.value)}
              placeholder="Day of the week"
              className={styles.special}
            />
            <input
              type="time"
              value={time}
              id="time"
              name="time"
              onChange={(e) => setTime(() => e.target.value)}
              className={styles.special}
            />
          </div>
        </div>
        <div className={styles.select}>
          <input
            type="radio"
            name="type"
            id="Serious"
            value="serious"
            onChange={(e) => setType(() => e.target.value)}
          />{" "}
          Serious
          <input
            type="radio"
            name="type"
            id="Funny"
            value="funny"
            onChange={(e) => setType(() => e.target.value)}
          />
          Funny
          <input
            type="radio"
            name="type"
            id="Other"
            value="other"
            onChange={(e) => setType(() => e.target.value)}
          />
          Other
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
