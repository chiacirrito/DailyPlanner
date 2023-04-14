import { FcPlanner } from "react-icons/fc";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <p>
        Planner <FcPlanner />
      </p>
    </div>
  );
};

export default Header;
