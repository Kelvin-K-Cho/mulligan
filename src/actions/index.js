import * as actionTypes from "./types";

const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  }
};

export { setUser };
