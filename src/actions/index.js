import * as actionTypes from "./types";

const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  }
};

const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  }
}

export { setUser, clearUser };
