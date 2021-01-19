const fetch = require('node-fetch');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Board } = require('../../db/models');
const { requireUser, getCurrentUser, AuthenticationError } = require('../util/auth');


// Get Boards
router.get('/:id', getCurrentUser, asyncHandler(async function (req, res, next) {
  console.log("HERE")
  const userId = req.params.id;
  console.log(userId);
  try {
    const data = await Board.getUserBoards(userId);
    const boards = await data.json();
    return res.json({ boards });
  } catch (err) {
    console.warn(err);
  }
}));

module.exports = router;
