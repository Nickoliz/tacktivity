const express = require('express');
const asyncHandler = require('express-async-handler');
// const Unsplash = require('unsplash-js').default;
// const toJson = require('unsplash-js').toJson;

// const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_API_KEY });
const router = express.Router();

// GET /photos
router.get('/', asyncHandler(async function (req, res, next) {
  const term = req.body;
  console.log(term);
  const photos = await fetch('https://api.unsplash.com/photos', {
    params: { query: keyword },
    headers: {
      "Authorization": `Client-ID ${process.env.UNSPLASH_API_KEY}`,
    }
  })
  if (res.ok) {
    const data = await photos.json();
  }
}))


module.exports = router;
