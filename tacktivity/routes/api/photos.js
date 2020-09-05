const fetch = require('node-fetch');
// const {
//   unsplash: { secret },
// } = require("../../config/index");
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// GET /search/photos
// router.get('/', asyncHandler(async function (req, res, next) {
//   const term = req.body;
//   // const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${term}&client_id=${process.env.UNSPLASH_API_KEY}`, {
//   const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=socks&client_id=${process.env.UNSPLASH_API_KEY}`, {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   if (data.ok) {
//     const imageData = await data.json();
//     const photos = [];
//     imageData.results.map((img) => {
//       photos.push(img);
//     })
//     const js = data.json();
//     console.log(js);
//     return res.json({
//       photos,
//     })
//   } else {
//     const badRequest = data.json();
//     return badRequest;
//   }
// }))

async function testRun(term) {
  try {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${term}&client_id=X2Dj56kaMcyuUuozi8CGMjBm40hHXweLsBuhUGnuwbc`);
    const imageData = await data.json();
    const photos = [];
    imageData.results.map((img) => {
      photos.push(img);
    })
    console.log(imageData);
  } catch (err) {
    console.error(err);
  }
}

testRun("socks");

module.exports = router;
