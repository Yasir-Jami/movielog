// Libraries
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/user.model.cjs');
const router = express.Router();
require("dotenv").config({path: './.env'});

// Create user
router.post('/register', async (req, res) => {
  try {
    // Get user data from json and check if user already exists in database
    const {email, password} = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({message: "User already exists."});
    }
    
    const hashedPass = await bcrypt.hash(password, 10);
    const userData = new User({
      email: email,
      password: hashedPass,
    });
    
    const user = await User.create(userData);
    console.log("Created new user:", user);
    res.status(201).json({ user });

  } catch (err) {
    console.error("Error:", err);
    res.status(400).json({ error: err.message });
  }
});

// Log in user
router.post('/login', async (req, res) => {
  try {
    // Get user data from json and check if user is in database
    const {email, password} = req.body;
    await User.findOne({ email })
    .then(async user => {
      if (user) {
        console.log("Found user:", user);
        if (await bcrypt.compare(password, user.password)) {
          res.sendStatus(200);
        }
        else {
          res.sendStatus(401);
        };
      }
      else {
        console.log("User not found");
        return res.status(400).json({message: "Cannot find user with this email."});
      }})
      .catch(err => {
        console.error("Error:", err);
    });
    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;