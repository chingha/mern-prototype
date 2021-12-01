const mongoose = require("mongoose");
const User = require("./User.model");

const connection = "mongodb://localhost:27017/merndemo";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;