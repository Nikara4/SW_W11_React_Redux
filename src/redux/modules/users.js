import { fetchUsers } from "../../assets/users";
import { addSnackbar } from "./snackbar";

const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "users/FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";
const FETCH_USERS_ADD_ONE = "users/FETCH_USERS_ADD_ONE";
const FETCH_USERS_RESET = "users/FETCH_USERS_RESET";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });

const fetchSucceeded = (users) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
});

const fetchFailed = () => ({ type: FETCH_USERS_FAILED });

const fetchAddOne = (user) => ({ type: FETCH_USERS_ADD_ONE, payload: user });

const fetchReset = () => ({ type: FETCH_USERS_RESET });

export const getUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    dispatch(
      addSnackbar({
        message: "Users requested from server",
        severity: "info",
      })
    );
    fetchUsers()
      .then((data) => {
        dispatch(fetchSucceeded(data.results));
        dispatch(
          addSnackbar({
            message: "Users successfully loaded",
            severity: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(fetchFailed());
        dispatch(
          addSnackbar({
            message: "Users fetch failed",
            severity: "error",
          })
        );
      });
  };
};

export const resetUsers = () => {
  return function (dispatch) {
    dispatch(fetchReset());
    dispatch(
      addSnackbar({
        message: "Users link reset",
        severity: "success",
      })
    );
  };
};

export const addOneUser = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    dispatch(
      addSnackbar({
        message: "Additional user requested from server",
        severity: "info",
      })
    );
    fetchUsers(1)
      .then((data) => {
        dispatch(fetchAddOne(data.results));
        dispatch(
          addSnackbar({
            message: "Additional user successfully added to the list",
            severity: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(fetchFailed());
        dispatch(
          addSnackbar({
            message: "Additional user fetch failed",
            severity: "error",
          })
        );
      });
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
      });
    case FETCH_USERS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
      });
    case FETCH_USERS_SUCCEEDED:
      return (state = {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      });
    case FETCH_USERS_ADD_ONE:
      return (state = {
        ...state,
        isLoading: false,
        isError: false,
        users: [...state.users, ...action.payload],
      });
    case FETCH_USERS_RESET:
      return (state = {
        ...state,
        isLoading: false,
        isError: false,
        users: [],
      });
    default:
      return state;
  }
}

export const selectUsers = (state) => state.users.users;
