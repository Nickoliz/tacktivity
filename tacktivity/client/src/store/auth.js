// Actions and reducers for auth
import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password }),
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  };
};

export const signup = (email, password) => {
  return async dispatch => {
    const res = await fetch('/api/users', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password }),
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  };
};

export default function authReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
