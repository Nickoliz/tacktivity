import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';


// import { getPhotos } from '../store/photoReducer';

// TEST

// import Unsplash, { toJson } from 'unsplash-js';

// const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_API_KEY, secret: process.env.UNSPLASH_SECRET_KEY })

const apiKey = process.env.UNSPLASH_API_KEY;

function SearchBar() {
  const [searchParam, setSearchParam] = useState('');
  const [image, setImage] = useState('');
  // const dispatch = useDispatch();

  // const onSearch = e => {
  //   e.preventDefault()
  //   dispatch(getPhotos(searchParam.toLocaleLowerCase()));
  //   setSearchParam('');
  // }

  // const onSearch = async (e) => {
  //   debugger;
  //   e.preventDefualt();
  //   const res = await unsplash.search.photos(searchParam, 1, 3)
  //   if (res.ok) {
  //     const photos = await res.json();
  //     console.log(photos);
  //     setImage(...photos);
  //   }
  // }


  const onSearch = async (e) => {
    e.preventDefault();
    // const res = await fetch(`https://api.unsplash.com/search/?query=${searchParam}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`, {
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${searchParam}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const data = await res.json();
      const imgs = [];
      data.results.map((img) => {
        setImage(img.urls.regular)
        // imgs.push(img.urls.regular);
      });
      // setImage(imgs);
      console.log(image);
      setSearchParam('');
    } else {
      const bad = res.json();
      return console.log(bad);
    }
  }

  return (
    <>
      <form className='form-tag' onSubmit={onSearch}>
        <i className='fas fa-search'>
          <input type='text' placeholder='Search' className="search-bar" value={searchParam} onChange={e => setSearchParam(e.target.value)} />
        </i>
      </form>
      <img src={image} className='images H1' />
    </>
  )
}

export default SearchBar;
