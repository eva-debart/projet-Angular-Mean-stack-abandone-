const mongoose = require("mongoose");

const User_Role = mongoose.model(
  "User_Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = User_Role;