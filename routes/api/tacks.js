const fetch = require('node-fetch');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Tack } = require('../../db/models')

// AWS S3
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const multer = require('multer');
const multerS3 = require('multer-s3');

// Keys
const {
  aws: { AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_NAME },
} = require("../../config/index");

const {
  unsplash: { secret },
} = require("../../config/index");

// AWS Config
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "us-west-2"
})

const singlePublicFileUpload = async (file, userId) => {
  const { originalname, mimetype, buffer } = await file;
  const path = require("path");
  // name of the file in your S3 bucket will be the date in ms plus the extension name
  const Key = 'users/' + userId + new Date().getTime().toString() + path.extname(originalname);
  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key,
    Body: buffer,
    ACL: "public-read"
  };
  const result = await s3.upload(uploadParams).promise();

  // Saves name of file in bucket as key in database for retrieval
  return result.Location;
};

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  }
});

const singleMulterUpload = (nameOfKey) => multer({ storage: storage }).single(nameOfKey);

// Post Tack
router.post('/', singleMulterUpload("file"), async (req, res) => {
  const tackData = req.body;
  const description = req.body.description;
  const userId = req.body.id;
  const title = req.body.title;

  tackData.url = await singlePublicFileUpload(req.file, userId);
  const url = tackData.url
  const tack = await Tack.create({ title, url, description, userId })
  return res.json({ tack });
})

// Get Tacks
router.get('/:id', asyncHandler(async function (req, res, next) {
  const id = req.params.id;
  try {
    const data = await fetch(`https://api.unsplash.com/photos/${id}?&client_id=${secret}`);
    const tackData = await data.json();
    return res.json({ tackData });
  } catch (err) {
    console.warn(err);
  }
}));

module.exports = router;
