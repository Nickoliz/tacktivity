import Cookies from 'js-cookie';

const GET_BOARD = 'api/boards/:id';

export const setBoards = boardData => {
  return {
    type: GET_BOARD,
    boardData
  }
}

export const getBoards = userId => {
  return async dispatch => {
    const res = await fetch(`/api/boards/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        "XSREF-TOKEN": Cookies.get("XSRF-TOKEN")
      }
    });
    res.boardData = await res.json();
    if (res.ok) {
      console.log(res.boardData);
      dispatch(setBoards(res.boardData.boardData));
    }
    return res;
  };
};

export default function boardReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case GET_BOARD:
      return action.boardData
    default:
      return state;
  }
}
