import { actions } from "./actions";

const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_DATE:
      localStorage.setItem(
        "dates-list",
        JSON.stringify([...state.datesList, action.payload])
      );
      localStorage.setItem(
        "initial-dates-list",
        JSON.stringify([...state.datesList, action.payload])
      );
      return {
        ...state,
        datesList: [...state.datesList, action.payload],
        initialDatesList: [...state.datesList, action.payload],
      };
    case actions.DELETE_DATE:
      return {
        ...state,
        datesList: state.datesList.filter((item) => item.id !== action.payload),
      };
    case actions.ON_SEARCH_DATE:
      return {
        ...state,
        datesList: state.initialDatesList.filter(
          (item) =>
            item.what.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.type.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actions.EDIT_DATE:
      return {
        ...state,
        payload: {
          id: id,
          dateId: id,
          dateWhat: date?.what,
          dateWhere: date?.where,
          dateDay: date?.day,
          dateTime: date?.time,
        },
      };

    case actions.FILTER_DATE:
      return {
        ...state,
        datesList: state.initialDatesList.filter(item.type === type),
      };
    default:
      return state;
  }
};

export { globalReducer };
