import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const SearchBar = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "ON_SEARCH_DATE", payload: e.target.value });
  };

  return (
    <div className={styles.Search}>
      <input
        type="text"
        onInput={onHandleSearch}
        name="search"
        id="search"
        placeholder="🔍Search for type or name..."
      />
    </div>
  );
};

export default SearchBar;
