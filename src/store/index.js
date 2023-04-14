import { createContext } from "react";

const initialState = {
  datesList: JSON.parse(localStorage.getItem("dates-list")) || [],
  initialDatesList:
    JSON.parse(localStorage.getItem("initial-dates-list")) || [],
};

const ApplicationCtx = createContext(initialState);
export { initialState, ApplicationCtx };
