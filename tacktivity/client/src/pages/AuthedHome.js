import React from 'react';

import Authed from '../components/Authed';
import SearchPhotos from '../components/SearchPhotos';
// import ViewPhoto from '../components/ViewPhoto';
import { useDispatch } from 'react-redux';
import { loadPhotos } from '../store/photoReducer';

function AuthedHome() {
  const dispatch = useDispatch();

  (function () {
    dispatch(loadPhotos());
  })();

  return (
    <>
      <Authed />
      <SearchPhotos />
      {/* <ViewPhoto /> */}
    </>
  )
}


export default AuthedHome;
