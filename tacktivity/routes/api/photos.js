const express = require('express');
const asyncHandler = require('express-async-handler');
const Unsplash = require('unsplash-js');
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_API_KEY });
const router = express.Router();

// GET /photos
router.get("/", asyncHandler(async function (req, res, next) {
  unsplash.photos.listPhotos(1, 20, "latest")
    .then(toJson)
    .then(json => {
      console.log(json);
    })

  // const res = await unsplash.photos.listPhotos(1, 20);
  // const data = await res.toJson();
  // console.log(data.urls);

}))

// GET collections/:id/related


module.exports = router;
