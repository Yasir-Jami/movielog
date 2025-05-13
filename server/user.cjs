// Libraries
const {MongoClient} = require("mongodb");
require("dotenv").config({path: "../.env"});

// MongoDB
const uri = process.env.VITE_ATLAS_URI;
const dbName = process.env.VITE_DB_NAME;
const dbUser = process.env.VITE_DB_COLLECTION_USER;

/**
 * This function creates a new user in the database based on given arguments. Fails if not all parameters are fulfilled.
 * @param {string} userFirstName First name
 * @param {string} userLastName Last name
 * @param {string} userEmail Email
 * @param {string} userPassword Password (hashed)
 */
async function addUser(
  userFirstName,
  userLastName,
  userEmail,
  userPassword) {
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbName);
    const users = database.collection(dbUser);

    const newUser = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      password: userPassword // Always hash passwords in real apps
    };

    const result = await users.insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);

  } catch (err) {
    console.error('Error updating documents:', err);
  } finally {
    await mongoClient.close();
  }
}

/**
 * Gets all first and last names of users from the database.
 */
async function getUserNames() {
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbName);
    const users = database.collection(dbUser);

    // Field to grab is after projection: (name, email, password, etc.)
    const cursor = users.find({}, { projection: { _id: 0 } });
    const userData = await cursor.toArray();
    console.log('User Names:', names.map(user => user.name));
    console.log('User Emails:', names.map(user => user.email));

  } catch (err) {
    console.error('Error getting user names:', err);
  } finally {
    await mongoClient.close();
  }
}

module.exports = {
  addUser,
  getUserNames,
}