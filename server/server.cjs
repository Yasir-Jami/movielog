const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios")
require("dotenv").config({path: "../.env"});

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// User API
app.get('/user', async (req, res) => {  
  try {
    const data = 0;
    res.json(data); // Send the response as JSON
  }
  catch (err) {
    console.log("Error while retrieving user data: ", err);
    res.status(500).json({err: "Failed to fetch user info"});
  }
});

// Movie API
app.get('/movie', async (req, res) => {
  try {
    const query = req.query.query;
    const url = `${process.env.OMDB_API_LINK}${query}&apikey=${process.env.OMDB_API_KEY}`;
    // Send request
    const response = await axios.get(url);
    res.json(response.data); // Send the response as JSON
  }
  catch (err) {
    console.error("Error fetching from omdb: ", err.message);
    res.status(500).json({err: "Failed to fetch from external api"});
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});