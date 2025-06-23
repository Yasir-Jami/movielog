// Movie API
const router = require('express').Router();
const axios = require('axios');

const API_LINK = process.env.OMDB_API_LINK;
const API_KEY = process.env.OMDB_API_KEY;

router.get('/', async (req, res) => {
  try {
    query = req.query.query;

    const url = `${API_LINK}${query}&apikey=${API_KEY}`;
	  console.log(query);
	  console.log(url);
    // Send request
    const response = await axios.get(url);
    res.json(response.data); // Send the response as JSON 
  }
  catch (err) {
    console.error("Error fetching from omdb:", err.message);
    res.status(500).json({err: "Failed to fetch from external api"});
  }

});

module.exports = router;
