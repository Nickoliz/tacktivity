import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { getPhotos } from '../store/photoReducer';

function SearchBar() {
  const [searchParam, setSearchParam] = useState('');
  const dispatch = useDispatch();


  const onSearch = e => {
    e.preventDefault();
    if (searchParam) {
      dispatch(getPhotos(searchParam));
      setSearchParam('');
    }
  }


  // THIS WORKS!
  // const imgs = [];
  // const onSearch = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&color=blue&query=${searchParam}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   if (res.ok) {
  //     const data = await res.json();
  //     data.results.map((img) => {
  //       imgs.push(img);
  //     })
  //     console.log(imgs)
  //     setImage(imgs);
  //     setSearchParam('');
  //   } else {
  //     const badRequest = res.json();
  //   }
  // }

  return (
    <>
      <form className='form-tag' onSubmit={onSearch}>
        <i className='fas fa-search'>
          <input type='text' placeholder='Search' className="search-bar" value={searchParam} onChange={e => setSearchParam(e.target.value)} />
        </i>
      </form>
    </>
  )
}

export default SearchBar;
