const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imdbId: { type: String, required: true },
  poster: { type: String, required: true },
  releaseYear: { type: String },
  runtime: { type: String },
  genre: { type: String },
  plot: { type: String },
  country: { type: String },
  imdbRating: { type: String },
  country: { type: String },
  type: {type: String }
}, {timestamps: true});

module.exports = mongoose.model('movies', movieSchema);