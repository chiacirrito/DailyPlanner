import { initialState } from "./store";
import { globalReducer } from "./store/redurcers";
import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import Header from "./components/header";
import Form from "./components/form/Form";
import styles from "./App.module.scss";
import List from "./components/list/List";
import SearchBar from "./components/searchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        <div className={styles.main}>
          <Header />
          <Form />
          <SearchBar />
          <List />
        </div>
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;
