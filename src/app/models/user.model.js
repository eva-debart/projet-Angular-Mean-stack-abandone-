const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    user_role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_Role"
      }
    ],
    amis:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    votreAmis:Boolean,
    created:Date,
  })
);
module.exports = User;