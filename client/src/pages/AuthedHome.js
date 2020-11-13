import React from 'react';
import SearchPhotos from '../components/SearchPhotos';
import { useDispatch } from 'react-redux';
import { loadPhotos } from '../store/photoReducer';

function AuthedHome() {
  const dispatch = useDispatch();

  (function () {
    dispatch(loadPhotos());
  })();

  return (
    <>
      <SearchPhotos />
    </>
  )
}


export default AuthedHome;
