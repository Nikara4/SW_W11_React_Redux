import { fetchUsers } from "../../assets/api";

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

// const USERS_RESET = "users/USERS_RESET";
// const USERS_ADD = "users/USERS_ADD";

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
    fetchUsers(10)
      .then((response) => response.json())
      .then((data) => dispatch(fetchSucceeded(data.results)))
      .catch((error) => dispatch(fetchFailed()));
  };
};

export const resetUsers = () => {
  return function (dispatch) {
    dispatch(fetchReset());
  };
};

export const addOneUser = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetchUsers(1)
      .then((response) => response.json())
      .then((data) => dispatch(fetchAddOne(data.results)))
      .catch((error) => dispatch(fetchFailed()));
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

export const selectUsers = (state) => state.users.users || [];
