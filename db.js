const mongoose = require("mongoose");
require("dotenv").config();

// defnie the mongodb connection URL

//const mongourl = 'mongodb://localhost:27017/hotels';
const mongourl = process.env.DB_URL;

//set up mongodb connect

mongoose.connect(mongourl, {
  //useNewUrlParser:true,
  //useUnifiedTopology:true
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("error");
});

db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("disconnected", () => {
  console.log("disconnected from mongodb server");
});

//export the database connection

module.exports = db;
