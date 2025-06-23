const mongoose = require('mongoose');

const movieListSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  movies: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'movies' // Model name
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users',
    required: true},
  },
  {timestamps: true});

module.exports = mongoose.model('movie_lists', movieListSchema);