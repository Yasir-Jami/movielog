const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config({path: "./.env"});

const userRoutes = require(`./routes/user.cjs`);
const movieRoutes = require(`./routes/movie.cjs`);
/*
const dbRoutes = require(`./routes/database.cjs`);
const { default: router } = require(`./routes/user.cjs`);
*/

// Config variables
const API_LINK = process.env.OMDB_API_LINK;
const API_KEY = process.env.OMDB_API_KEY;
const API_PATH = process.env.SERVER_API_PATH;
const USER_PATH = process.env.SERVER_PATH_USER;
const DATABASE_PATH = process.env.SERVER_PATH_DATABASE;
const MOVIE_PATH = process.env.SERVER_PATH_MOVIE;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
  'https://movielog.ca', 
  '75.159.63.134', 
  'https://6834b2292c0ad7154898e83d--earnest-pika-ec3ae8.netlify.app/',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

//app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//app.use(USER_PATH, userRoutes);
app.use('/movie', movieRoutes);
//app.use(DATABASE_PATH, dbRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
