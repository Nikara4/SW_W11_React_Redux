const COUNTER_LOAD = "users/COUNTER_LOAD";
const COUNTER_RESET = "users/COUNTER_RESET";
const COUNTER_ADD = "users/COUNTER_ADD";

export const load = () => ({ type: COUNTER_LOAD });

export const reset = () => ({ type: COUNTER_RESET });

export const add = (payload) => {
  return {
    type: COUNTER_ADD,
    payload,
  };
};

const INITIAL_STATE = {
  users,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_LOAD:
      return { ...state, users: state.users };
    case COUNTER_RESET:
      return { ...state, users: state.users };
    case COUNTER_ADD:
      return { ...state, users: state.users };
    default:
      return state;
  }
}
