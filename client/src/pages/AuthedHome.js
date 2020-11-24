import React, { useEffect, useState } from 'react';
import SearchPhotos from '../components/SearchPhotos';
import { useDispatch } from 'react-redux';
import { loadPhotos, clearPhotos } from '../store/photoReducer';

export default function AuthedHome() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  // BELOW IS CAUSING ADDITIONAL RENDER ON Tack.js

  useEffect(() => {
    dispatch(clearPhotos());
    setTimeout(() => {
      dispatch(loadPhotos());
      setLoading(false);
    }, 2000);
  }, [dispatch])

  return (
    <>
      {(loading) ?
        <div id='loading-div'>
          <div id='loading-note'>Loading Latest Photos...</div>
          <div className='fa fa-circle-notch fa-spin fa-8x' id='loading-spinner' />
        </div>
        :
        <SearchPhotos />
      }
    </>
  )
}
