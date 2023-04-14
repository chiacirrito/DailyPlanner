import {
  ADD_DATE,
  DELETE_DATE,
  EDIT_DATE,
  UPDATE_DATE,
} from "../actions/actionTypes";

const initialState = {
  datesList: JSON.parse(localStorage.getItem("dates-list")) || [],
  initialDatesList:
    JSON.parse(localStorage.getItem("initial-dates-list")) || [],
  isEdit: false,
  editDateId: "",
};

const dailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATE:
      localStorage.setItem(
        "dates-list",
        JSON.stringify([...state.datesList, action.payload])
      );
      localStorage.setItem(
        "initial-date-list",
        JSON.stringify([...state.datesList, action.payload])
      );
      return {
        ...state,
        datesList: [...state.datesList, action.payload],
        initialDatesList: [...state.datesList, action.payload],
        isEdit: action.isEdit,
      };

    case DELETE_DATE:
      const newListDate = state?.datesList.filter(
        (item) => item.id !== action.id
      );

      return {
        ...state,
        datesList: newListDate,
      };

    case EDIT_DATE:
      const editDate = action.payload;
      let newEditDate = state?.datesList?.find(
        (item) => item.id === editDate.id
      );
      return {
        ...state,
        isEdit: action.isEdit,
        editDate: newEditDate,
      };
    case UPDATE_DATE:
      const { dateId, dateWhat, dateWhere, dateDay, dateTime } = action.payload;
      const datesList = state.datesList.filter((date) => {
        return date.id !== dateId;
      });

      const date = state.datesList.find((date) => date?.id === dateId);
      date.what = dateWhat;
      date.where = dateWhere;
      date.day = dateDay;
      date.time = dateTime;
      datesList.push(date);

      return {
        ...state,
        datesList: [...datesList],
        isEdit: false,
      };

    default:
      return state;
  }
};

export default dailyReducer;
