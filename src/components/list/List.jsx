import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import Card from "../card/Card";
import styles from "./index.module.scss";

const List = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.List}>
      {state.datesList.map((date) => (
        <Card data={date} key={date.id} />
      ))}
    </div>
  );
};

export default List;
