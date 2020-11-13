import Cookies from 'js-cookie';

const GET_PHOTOS = 'photos/GET_PHOTOS';
const GET_PHOTO = 'photos/GET_PHOTO';

export const setPhotos = photos => {
  return {
    type: GET_PHOTOS,
    photos
  };
}

export const setPhoto = photo => {
  return {
    type: GET_PHOTO,
    photo: photo
  };
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

export const getPhoto = id => {
  return async dispatch => {
    const res = await fetch(`/api/photos/photo/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    });
    res.photo = await res.json();
    if (res.ok) {
      dispatch(setPhoto(res.photo));
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
    case GET_PHOTO:
      return action.photo;
    default:
      return state;
  }
}
