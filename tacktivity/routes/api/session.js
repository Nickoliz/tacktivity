// Login - Logout - anything that defines a user session

const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { User } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { requireUser, generateToken, getCurrentUser, AuthenticationError } = require("../util/auth");
const { jwtConfig: { expiresIn } } = require('../../config');

const router = express.Router();

const validateLogin = [
  check("email", "Oi! You missed a spot! Gonna need your email.").exists(),
  check("password", "What's the password?").exists(),
];

// Get current user - if there is a user return is a json format the user object
router.get("/", getCurrentUser, asyncHandler(async function (req, res, next) {
  return res.json({
    user: req.user || {}
  });
}));

// Validate user at login
router.put("/", validateLogin, handleValidationErrors, asyncHandler(async function (req, res, next) {
  const user = await User.login(req.body);
  if (user) {
    const token = await generateToken(user);
    res.cookie("token", token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.json({
      user,
    });
  }
  const err = new Error('Invalid credentials');
  err.status = 422;
  return next(err);
}));

module.exports = router;
