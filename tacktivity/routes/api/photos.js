const fetch = require('node-fetch');
// const {
//   unsplash: { secret },
// } = require("../../config/index");
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// GET /search/photos
router.get('/search/:term', asyncHandler(async function (req, res, next) {
  try {
    const term = req.params.term;
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=50&query=${term}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`);
    const imageData = await data.json();
    const photos = imageData.results;
    return res.json({ photos });
  } catch (err) {
    console.warn(err);
  }
}));

// ALL THIS BELOW WORKS
//
// async function testRun(term) {
//   try {
//     const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${term}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`);
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

module.exports = router;
