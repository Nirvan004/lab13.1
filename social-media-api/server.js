const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 2004;

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

app.get("/", async (req, res) => {
  try {
    await client.connect();

    res.json({
      message: "Successfully connected to the database!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to connect to the database."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});