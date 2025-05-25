const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios")
const Database = require("./database.cjs");
require("dotenv").config({path: "./.env"});

// Config variables
const API_LINK = process.env.OMDB_API_LINK;
const API_KEY = process.env.OMDB_API_KEY;
const API_PATH = process.env.SERVER_API_PATH;
const DATABASE_PATH = process.env.SERVER_PATH_DATABASE;
const MOVIE_PATH = process.env.SERVER_PATH_MOVIE;
const USER_PATH = process.env.SERVER_PATH_USER;

const database = new Database();

let apiCounter = 0;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
/*const allowedOrigins = ['https://movielog.ca', '75.159.63.134'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
*/
app.use(cors());

// Database User API
app.get(`${DATABASE_PATH}${USER_PATH}`, async (req, res) => {  
  try {
    const data = database.checkCollections();
    res.json(data); // Send the response as JSON
  }
  catch (err) {
    console.log("Error while retrieving user data: ", err);
    res.status(500).json({err: "Failed to fetch user info"});
  }
});

// Movie API
app.get(`${MOVIE_PATH}`, async (req, res) => {
  try {
    query = req.query.query;
    
    const url = `${API_LINK}${query}&apikey=${API_KEY}`;
    console.log("Query:", query);
    console.log("Final URL:", url);
    // Send request
    const response = await axios.get(url);
    res.json(response.data); // Send the response as JSON 
  }
  catch (err) {
    console.error("Error fetching from omdb:", err.message);
    res.status(500).json({err: "Failed to fetch from external api"});
  }

});

app.get('/test', async (req, res) => {
	try {
    // Send response
    const response = "hello";
		console.log(response);
    res.json(response); // Send the response as JSON
  }
  catch (err) {
    console.error(err.message);
    res.status(500).json({err: "Failed to fetch from external api"});
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
