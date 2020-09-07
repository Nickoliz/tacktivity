import Cookies from 'js-cookie';

const GET_TACK = 'api/tacks/:id';

export const setPhoto = photo => {
  return {
    type: GET_TACK,
    photo
  }
}

export const getSinglePhoto = id => {
  return async dispatch => {
    const res = await fetch(`/api/tacks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "XSREF-TOKEN": Cookies.get("XSRF-TOKEN")
      }
    });
    res.photo = await res.json();
    if (res.ok) {
      dispatch(setPhoto(res.photo));
    }
    return res;
  };
};

export default function photoReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_TACK:
      return action.photo
    default:
      return state;
  }
}
