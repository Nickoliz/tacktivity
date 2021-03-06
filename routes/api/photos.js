const fetch = require('node-fetch');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const {
  unsplash: { secret },
} = require("../../config/index");

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

router.get('/photo/:id', asyncHandler(async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${secret}`);
    const photo = await data.json();
    return res.json({ photo });
  } catch (err) {
    console.warn(err);
  }
}));

const colors = ["blue", "orange", "purple", "green", "yellow", "red"]
const themes = ["food", "cars", "sports"]

function randomColor(arr) {
  num = Math.floor(Math.random() * Math.floor(6))
  return arr[num]
}
function randomTheme(arr) {
  num = Math.floor(Math.random() * Math.floor(3))
  return arr[num]
}

function randomPage(num) {
  return Math.floor(Math.random() * num) + 1;
}

function randomPageOver5(num) {
  return Math.floor(Math.random() * num) + 5;
}

router.get('/colors', asyncHandler(async function (req, res, next) {
  try {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=50&query=${randomTheme(themes)}&color=${randomColor(colors)}&client_id=${secret}`);
    const imageData = await data.json();
    const colorPhotos = imageData.results;
    return res.json({ colorPhotos });
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


router.get('/collection', asyncHandler(async function (req, res, next) {
  try {
    const data = await fetch(`https://api.unsplash.com/photos?page=${randomPageOver5(5)}&per_page=12&client_id=${secret}`);
    const photos = await data.json();
    return res.json({ photos })
  } catch (e) {
    console.warn("Error", e);
  }
}))

module.exports = router;
