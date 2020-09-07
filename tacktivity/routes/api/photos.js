const fetch = require('node-fetch');
const {
  unsplash: { secret },
} = require("../../config/index");
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// GET /search/photos
router.get('/search/:term', asyncHandler(async function (req, res, next) {
  try {
    const term = req.params.term;
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=50&query=${term}&client_id=${secret}`);
    const imageData = await data.json();
    const photos = imageData.results;
    return res.json({ photos });
  } catch (err) {
    console.warn(err);
  }
}));

router.get('/', asyncHandler(async function (req, res, next) {
  try {
    const data = await fetch(`https://api.unsplash.com/photos?page=1&per_page=50&client_id=${secret}`);
    const imageData = await data.json();
    const photos = imageData;
    return res.json({ photos });
  } catch (err) {
    console.warn(err);
  }
}));


// ALL THIS BELOW WORKS
//
// async function testRun(term) {
//   try {
//     const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${term}&client_id=INTPUT API FOR TESTING`);
//     const imageData = await data.json();
//     const photos = [];
//     imageData.results.map((img) => {
//       photos.push(img);
//     })
//     console.log(imageData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function testRun() {
//   try {
//     const data = await fetch(`https://api.unsplash.com/photos/fPKgvXNSNqg?&client_id=INSERT API FOR TESTING`);
//     const imageData = await data.json();
//     const photos = [];
//     // imageData.results.map((img) => {
//     //   photos.push(img);
//     // })
//     console.log(imageData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// testRun();

module.exports = router;
