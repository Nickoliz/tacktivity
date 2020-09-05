
const GET_PHOTOS = 'getimage/GET_PHOTOS';

export const photo = photo => {
  return {
    type: GET_PHOTOS,
    photo
  }
}

export const getPhotos = () => {
  return async dispatch => {
    const res = await fetch('/api/photos', {
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ keyword }),
    });
    res.data = await res.json();
    if (res.ok) {
      console.log(res.data);
      dispatch(getPhotos(res.data));
    }
    return res;
  };
};

export default function photoReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_PHOTOS:
      return action.photo;
    default:
      return state;
  }
}
