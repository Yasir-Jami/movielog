const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config({path: "./.env"});

const userRoutes = require(`./routes/users.cjs`);
const movieRoutes = require(`./routes/movies.cjs`);
/*
const dbRoutes = require(`./routes/database.cjs`);
const { default: router } = require(`./routes/user.cjs`);
*/

// Config variables
const USER_PATH = process.env.SERVER_PATH_USER;
const DATABASE_PATH = process.env.SERVER_PATH_DATABASE;
const MOVIE_PATH = process.env.SERVER_PATH_MOVIE;
const dbName = process.env.DATABASE_NAME;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
  'https://movielog.ca', 
  '75.159.63.134',
];

const corsOptions = {
  origin: function (origin, callback) {
    //console.log('Incoming Origin:', origin);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  },
};

if (process.env.ENVIRONMENT == "prod") {app.use(cors(corsOptions));} 
else {app.use(cors());}

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {dbName}, {
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
//app.use(DATABASE_PATH, dbRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
