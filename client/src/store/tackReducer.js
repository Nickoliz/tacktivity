import Cookies from 'js-cookie';

const GET_TACK = 'api/tacks/:id';

export const setPhoto = tackData => {
  return {
    type: GET_TACK,
    tackData
  }
}

export const getTack = id => {
  return async dispatch => {
    const res = await fetch(`/api/tacks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "XSREF-TOKEN": Cookies.get("XSRF-TOKEN")
      }
    });
    res.tackData = await res.json();
    if (res.ok) {
      dispatch(setPhoto(res.tackData.tackData));
    }
    return res;
  };
};

export default function photoReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_TACK:
      return action.tackData
    default:
      return state;
  }
}
