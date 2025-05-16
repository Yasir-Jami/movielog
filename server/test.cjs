const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config({path: ".env"});

app.use(cors());

app.get('/', async (req, res) => {  
  try {
    const data = `Connected to URL on port ${process.env.port}`;
    res.json(data); // Send the response as JSON
  }
  catch (err) {
    console.log("Error while retrieving user data: ", err);
    res.status(500).json({err: "Failed to fetch user info"});
  }
});


// Start the server
const port = process.env.PORT || 5000;
app.listen(5001, '0.0.0.0', () => {
  console.log(`Server is running on port 5001`);
});
