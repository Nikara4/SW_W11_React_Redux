import { v4 as uuidv4 } from "uuid";
const SNACKBAR_ADD = "snackbar/SNACKBAR_ADD";
const SNACKBAR_REMOVE = "snackbar/SNACKBAR_REMOVE";

const INITIAL_STATE = {
  snackbars: [],
};

export function add(data) {
  return { type: SNACKBAR_ADD, payload: data };
}
export function remove(id) {
  return { type: SNACKBAR_REMOVE, payload: id };
}
export function addSnackbar(data) {
  return function (dispatch) {
    dispatch(add(data));
  };
}
export function removeSnackbar(id) {
  return function (dispatch) {
    dispatch(remove(id));
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SNACKBAR_ADD:
      return {
        ...state,
        snackbars: [...state.snackbars, { id: uuidv4(), ...action.payload }],
      };
    case SNACKBAR_REMOVE:
      return {
        ...state,
        snackbars: state.snackbars.filter(
          (snack) => snack.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
