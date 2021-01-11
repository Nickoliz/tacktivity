import Cookies from 'js-cookie';

const GET_PHOTOS = 'photos/GET_PHOTOS';
const GET_COLOR_PHOTOS = 'photos/GET_COLOR_PHOTOS';
const GET_PHOTO = 'photos/GET_PHOTO';
const CLEAR_PHOTOS = 'photos/CLEAR_PHOTOS';

export const setPhotos = photos => {
  return {
    type: GET_PHOTOS,
    photos
  };
}

export const setColorPhotos = colorPhotos => {
  return {
    type: GET_COLOR_PHOTOS,
    colorPhotos
  };
}

export const setPhoto = photo => {
  return {
    type: GET_PHOTO,
    photo: photo
  };
}

export const noPhotos = () => {
  return {
    type: CLEAR_PHOTOS,
    photos: {}
  }
}

export const clearPhotos = () => {
  return async dispatch => {
    dispatch(noPhotos())
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

export const getPhoto = id => {
  return async dispatch => {
    const res = await fetch(`/api/photos/photo/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    });
    res.colorPhoto = await res.json();
    if (res.ok) {
      dispatch(setPhoto(res.colorPhoto));
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
      dispatch(setColorPhotos(res.photos));
    }
    return res;
  };
};

export const collectionPhotos = () => {
  return async dispatch => {
    const res = await fetch(`/api/photos/collection`, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSFR-TOKEN"),
      },
    });
    res.photos = await res.json();
    if (res.ok) {
      dispatch(setPhotos(res.photos));
    }
    return res;
  }
}

export default function photoReducer(state = {}, action) {
  // Object.freeze(state);
  switch (action.type) {
    case GET_COLOR_PHOTOS:
      return action.colorPhotos;
    // return action.colorPhotos;
    case GET_PHOTOS:
      return {...state, ...action.photos};
    case GET_PHOTO:
      return {...state, ...action.photo};
    case CLEAR_PHOTOS:
      return {};
    default:
      return state;
  }
}
