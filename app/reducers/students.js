// @flow
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_RATING,
  SET_NAME,
  SET_USERNAME
} from '../actions/students';
import type { Action } from './types';

export default function preferences(state = [], action: Action) {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];

    case SET_RATING:
      return state.map(student => {
        if (student.id === action.payload.id) {
          const temp = { ...student };

          if (temp.rating === action.payload.rating) {
            temp.rating = 0;
          } else {
            temp.rating = action.payload.rating;
          }

          return temp;
        }
        return student;
      });

    case SET_NAME:
      return state.map(student => {
        if (student.id === action.payload.id) {
          return { ...student, name: action.payload.name };
        }
        return student;
      });

    case SET_USERNAME:
      return state.map(student => {
        if (student.id === action.payload.id) {
          return { ...student, username: action.payload.username };
        }
        return student;
      });

    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.payload);

    default:
      return state;
  }
}
