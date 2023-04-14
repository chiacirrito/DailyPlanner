import Header from "./components/header";
import Form from "./components/form/Form";
import styles from "./App.module.scss";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCard from "./components/listCard/ListCard";

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <div className={styles.main}>
          <Header />
          <div className={styles.special}>
            <Form />
            <ListCard />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
