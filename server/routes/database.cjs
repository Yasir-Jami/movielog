// Import libraries
const movieList = require("./movielist.cjs")
const mongoose = require("mongoose");
require("dotenv").config({path: "./.env"});

// Database User API
router.get(`${DATABASE_PATH}${USER_PATH}`, async (req, res) => {  
  try {
    const data = database.checkCollections();
    res.json(data); // Send the response as JSON
  }
  catch (err) {
    console.log("Error while retrieving user data: ", err);
    res.status(500).json({err: "Failed to fetch user info."});
  }
});

// Check database collections
router.get(`${DATABASE_PATH}${USER_PATH}`, async (req, res) => {  
  try {
    const data = checkCollections();
    res.json(data); // Send the response as JSON
  }
  catch (err) {
    console.log("Error while retrieving user data: ", err);
    res.status(500).json({err: "Failed to fetch user info."});
  }
});

async function checkCollections() {
  const mongoClient = new mongoose(uri);
  try {
      await mongoClient.connect();
      const collections = await mongoClient.db(dbName).collections(); // retrieve list of collections from db
      const response = collections; // loops through each collection in the collection array
      console.log(response);
      return response;
  } catch (e) {
    console.error(e);
  } finally {
    await mongoClient.close();
  }
}

  
module.exports = router;