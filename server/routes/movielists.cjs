// Libraries
const express = require('express');
const MovieList = require('../models/movielist.model.cjs');
const User = require('../models/user.model.cjs')
const router = express.Router();
require("dotenv").config({path: './.env'});

// Create new movie list
router.post('/createlist', async (req, res) => {
  const { listName, email  } = req.body;
  console.log(req.body);
  try {
    if (!listName) {
      res.status(400).json({error: "No list name given" });
    }
    const user = await User.findOne( {email} );
    if (!user) return res.status(404).json( {message: "User not found"} );
    
    // TODO: Only the list that contains the user's ID
    const movieListExists = await MovieList.findOne( {listName} ); 
    if (movieListExists) {
      return res.status(404).json( {message: "List already exists."} );
    }

    const newMovieList = new MovieList({
      name: listName,
      user: user._id,
    });
    await MovieList.create(newMovieList);
    res.send("New list created:", listName, "with ID:", user._id).status(200);
  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
})

// Get all movie lists
router.post('/getlists', async (req, res) => {
  const {email} = req.body;
  try {
    const user = await User.findOne( {email} );
    if (!user) return res.status(404).json( {message: "User not found"} );

    // Get each list and return the name and all movies
    const movieLists = await MovieList.find({ user: user._id });

    console.log(movieLists);
    res.send(200);

  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new movie - can change it to add more than one movie at a time
router.post('/addmovie', async (req, res) => {
  const {email} = req.body;
  try {
    const user = await User.findOne( {email} );
    if (!user) return res.status(404).json( {message: "User not found"} );

    const movieLists = await MovieList.find({ user: user._id });

    console.log(movieLists);
    res.send(200);

  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;