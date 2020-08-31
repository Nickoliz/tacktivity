const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { User } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");


const validateSignup = [
  check("username", "must be between 5 and 70 characters.")
    .isLength({ min: 5, max: 70 }),
  check("email", "Must be a valid email.")
    .exists()
    .isEmail(),
  check("firstName", "Must provide your first name.")
    .exists()
    .isLength({ min: 2, max: 50 }),
  check("lastName", "Must provide your last name.")
    .exists()
    .isLength({ min: 2, max: 100 }),
  check("age", "Must provide your age for protection.")
    .exists()
    .isNumeric(),
  check("hashedPassword", "Must be 6 or more characters.")
    .exists()
    .isLength({ min: 6, max: 70 }),
];

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
  const users = await User.findAll();
  res.json({ users });
}));

router.post("/", validateSignup, handleValidationErrors, asyncHandler(async function (req, res) {
  const user = await User.signup(req.body);

  const token = await generateToken(user);
  res.cookie("token", token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  return res.json({
    user,
  });
}));

module.exports = router;
