// Import libraries
const user = require("./user.cjs");
const {MongoClient} = require("mongodb");
require("dotenv").config({path: "../.env"});
const express = require('express');
const cors = require('cors');
const app = express();

// MongoDB
const uri = process.env.VITE_ATLAS_URI;
const dbName = process.env.VITE_DB_NAME;

// Database Collection Names
const dbUser = process.env.VITE_DB_COLLECTION_USER;

async function checkCollections() {
  const client = new MongoClient(uri);
  try {
      await client.connect();
      const collections = await client.db(dbName).collections(); // retrieve list of collections from db
      collections.forEach((collection) => console.log(collection.s.namespace.collection)); // loops through each collection in the collection array
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

user.addUser("Greg", "Gregson", "gregory@gmail.com", "greg123");