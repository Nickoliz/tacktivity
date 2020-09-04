const GET_PHOTOS = 'getimage/GET_PHOTOS';

export const photo = photo => {
  return {
    type: GET_PHOTOS,
    photo
  }
}

export const getPhotos = () => {
  return async dispatch => {
    const res = await fetch('/api/photos');
    res.data = await res.json();
    if (res.ok) {
      dispatch(getPhotos(res.data));
    }
    return res;
  };
};

export default function photoReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_PHOTOS:
      return [state, ...action.photo];
    default:
      return state;
  }
}
