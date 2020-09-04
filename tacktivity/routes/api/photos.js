const express = require('express');
const asyncHandler = require('express-async-handler');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_API_KEY });
const router = express.Router();

// GET /photos
router.get("/", asyncHandler(async function (req, res, next) {
  // unsplash.photos.listPhotos(1, 20, "latest")
  //   .then(toJson)
  //   .then(json => {
  //     console.log(json);
  //   })

  const photoPack = await unsplash.photos.listPhotos(1, 20);
  const photo = await photoPack.json();
  console.log(photo.urls);

}))

// GET collections/:id/related


module.exports = router;
