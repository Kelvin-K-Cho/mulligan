import * as actionTypes from "./types";

// User Actions
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

// Channel Actions

const setCurrentChannel = channel => {
  return {
    type: actionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  }
}

export { setUser, clearUser, setCurrentChannel };
