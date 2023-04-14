import { ADD_DATE, DELETE_DATE, EDIT_DATE, UPDATE_DATE } from "./actionTypes";

export const addNewDate = (date) => {
  return {
    type: ADD_DATE,
    payload: {
      id: Math.floor(Math.random() * 1000),
      what: date?.what,
      where: date?.where,
      day: date?.day,
      time: date?.time,
      type: date?.type,
    },
  };
};

export const deleteDate = (id) => {
  return {
    type: DELETE_DATE,
    id,
  };
};

export const editDate = (id) => {
  return {
    type: EDIT_DATE,
    payload: {
      id: id,
    },
    isEdit: true,
  };
};

export const updateDate = (id, date) => {
  return {
    type: UPDATE_DATE,
    payload: {
      dateId: id,
      dateWhat: date?.what,
      dateWhere: date?.where,
      dateDay: date?.day,
      dateTime: date?.time,
    },
  };
};
