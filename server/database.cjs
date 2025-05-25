// Import libraries
const User = require("./user.cjs");
const MovieList = require("./movielist.cjs")
const {MongoClient} = require("mongodb");
require("dotenv").config({path: "./.env"});

// MongoDB
const uri = process.env.ATLAS_URI;
const dbName = process.env.DB_NAME;

// Database Classes
const userCollection = new User(uri, dbName, process.env.DB_COLLECTION_USER);
const movieListCollection = new MovieList(uri, dbName, process.env.DB_COLLECTION_MOVIE_LIST);

class Database {
  async checkCollections() {
  const mongoClient = new MongoClient(uri);
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
}

module.exports = Database;