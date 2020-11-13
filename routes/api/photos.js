const fetch = require('node-fetch');
// AWS S3
const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');


const {
  aws: { aws_secret, aws_id },
} = require("../../config/index");
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

router.get('/photo/:id', asyncHandler(async function (req, res, next) {
  try {
    console.log("here")
    const id = req.params.id;
    console.log(id);
    const data = await fetch(`https://api.unsplash.com/photos?id=${id}&client_id=${secret}`);
    const imageData = await data.json();
    const photo = imageData.results;
    return res.json({ photo });
  } catch (err) {
    console.warn(err);
  }
}));

const colors = ["blue", "orange", "purple", "green", "yellow", "red", "brown"]
const themes = ["nature", "food", "friends"]

function randomColor(arr) {
  num = Math.floor(Math.random() * Math.floor(6))
  return arr[num]
}
function randomTheme(arr) {
  num = Math.floor(Math.random() * Math.floor(2))
  return arr[num]
}

router.get('/colors', asyncHandler(async function (req, res, next) {
  try {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=50&query=${randomTheme(themes)}&color=${randomColor(colors)}&client_id=${secret}`);
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

module.exports = router;
