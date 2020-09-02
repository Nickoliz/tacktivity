// Actions and reducers for auth
import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const CREATE_USER = 'users/CREATE_USER';
const DEMO_LOGIN = 'auth/DEMO_LOGIN'
const LOGOUT_USER = 'auth/LOGOUT_USER'

export const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const createUser = user => {
  return {
    type: CREATE_USER,
    user
  }
}

export const demoUser = user => {
  return {
    type: DEMO_LOGIN,
    user
  }
}

export const logoutUser = user => {
  return {
    type: LOGOUT_USER,
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
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(createUser(res.data.user));
      dispatch(setUser(res.data.user));
    }
    return res;
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
      dispatch(createUser(res.data.user));
    }
    return res;
  };
};

export const demoLogin = () => {
  return async dispatch => {
    const email = 'demo@tacktivity.com';
    const password = 'password'
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password })
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(demoUser(res.data.user));
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
    case SET_USER || CREATE_USER:
      return action.user;
    case DEMO_LOGIN:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
