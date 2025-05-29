// Libraries
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/user.model.cjs');
const router = express.Router();
require("dotenv").config({path: './.env'});

// Create user
router.post('/', async (req, res) => {
  try {
    // Get user data from json and check if user already exists in database
    const userData = new User(req.body);
    const { email } = userData;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({message: "User already exists."});
    }
    const user = await User.create(userData);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;