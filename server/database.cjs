// Import libraries
const user = require("./user.cjs");
const {MongoClient} = require("mongodb");
require("dotenv").config({path: "./.env"});

// MongoDB
const uri = process.env.ATLAS_URI;
const dbName = process.env.DB_NAME;

async function checkCollections() {
  const mongoClient = new MongoClient(uri);
  try {
      await mongoClient.connect();
      const collections = await mongoClient.db(dbName).collections(); // retrieve list of collections from db
      collections.forEach((collection) => console.log(collection.s.namespace.collection)); // loops through each collection in the collection array
  } catch (e) {
    console.error(e);
  } finally {
    await mongoClient.close();
  }
}

checkCollections();
//user.addUser("Greg", "Gregson", "gregory@gmail.com", "greg123");