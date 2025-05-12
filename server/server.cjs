const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Sample API route to get data
app.get('/api/user', (req, res) => {
  const data = {
    message: 'Get user info here!',
    number: Math.random() * 100,
  };
  res.json(data); // Send the response as JSON
});

app.get('/api/movie', (req, res) => {
  const data = {
    message: 'Get user info here!',
    number: Math.random() * 100,
  };
  res.json(data); // Send the response as JSON
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});