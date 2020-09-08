// Actions and reducers for auth
import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const LOGOUT_USER = 'auth/LOGOUT_USER'
const INVALID_CREDENTIALS = 'auth/INVALID_USER'

export const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const logoutUser = user => {
  return {
    type: LOGOUT_USER,
    user
  }
}

export const invalidLogin = invalid => {
  return {
    type: INVALID_CREDENTIALS,
    invalid
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
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res.data;
  };
};

export const signup = (email, password, age) => {
  return async dispatch => {
    const res = await fetch('/api/users', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password, age }),
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  };
};

export const logout = () => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'delete',
      headers: {
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
    })
    if (res.ok) dispatch(logoutUser());
    res.data = await res.json();
    return res;
  }
}

export default function authReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case SET_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    case INVALID_CREDENTIALS:
      return action.invalid
    default:
      return state;
  }
}
