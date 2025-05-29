const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  data: {type: String, required: true, unique: true},
  }, {timestamps: true});

module.exports = mongoose.model('UserModel', userSchema);