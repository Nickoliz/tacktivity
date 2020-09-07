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
