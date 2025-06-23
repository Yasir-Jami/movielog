const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config({path: "./.env"});

// Paths to routes
const userRoutes = require(`./routes/users.cjs`);
const movieRoutes = require(`./routes/movies.cjs`);
const movieListRoutes = require(`./routes/movielists.cjs`);

// Get port if provided, default to 5000
var args = require('minimist')(process.argv.slice(2));
const port = args.port || process.env.PORT;

// Config variables
const USER_PATH = process.env.SERVER_PATH_USER;
const DATABASE_PATH = process.env.SERVER_PATH_DATABASE;
const MOVIE_PATH = process.env.SERVER_PATH_MOVIE;
const dbName = process.env.DATABASE_NAME;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
  'https://movielog.ca',
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

// CORS
if (port == 6000) {
  app.use(cors());
  console.log("Running devserver");
}
else {
  app.use(cors(corsOptions));
}

// Connect to MongoDB cloud
mongoose.connect(process.env.ATLAS_URI, {dbName}, {
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
// Routes
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/movielists', movieListRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// TODO research joi validation - validates incoming requests to ensure they are correct instead of relying on HTTP 400