const fetch = require('node-fetch');
const {
  unsplash: { secret },
} = require("../../config/index");
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/:id', asyncHandler(async function (req, res, next) {
  const id = req.params.id;
  try {
    const data = await fetch(`https://api.unsplash.com/photos/${id}?&client_id=${secret}`);
    const imageData = await data.json();
    const photos = imageData;
    console.log(imageData);
    console.log("GETTING SINGLE")
    return res.json({ photo });
  } catch (err) {
    console.warn(err);
  }
}));

module.exports = router;
