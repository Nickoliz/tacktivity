import Cookies from 'js-cookie';

const GET_PHOTOS = 'photos/GET_PHOTOS';

export const setPhotos = photos => {
  return {
    type: GET_PHOTOS,
    photos
  }
}

export const getPhotos = term => {
  return async dispatch => {
    const res = await fetch(`/api/photos/search/${term}`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    });
    res.photos = await res.json();
    if (res.ok) {
      dispatch(setPhotos(res.photos));
    }
    return res;
  };
};

export const loadPhotos = () => {
  return async dispatch => {
    const res = await fetch(`/api/photos/`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    });
    res.photos = await res.json();
    if (res.ok) {
      dispatch(setPhotos(res.photos));
    }
    return res;
  };
};

export const colorPhotos = () => {
  return async dispatch => {
    const res = await fetch(`/api/photos/colors`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    });
    res.photos = await res.json();
    if (res.ok) {
      dispatch(setPhotos(res.photos));
    }
    return res;
  };
};

export default function photoReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
}
