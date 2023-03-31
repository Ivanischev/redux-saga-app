import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userActionConstants"

const initialState = {
  users: [],
  loading: false,
  error: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default rootReducer;