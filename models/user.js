const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema({
foodname:{
  type: String,
  required: true,
},
ingredient:{
  type: String,
  required: true,
},
recipe:{
  type: String,
  required: true,
},
instruction:{
  type: String,
  required: true,
},

});




const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry:[foodSchema],
}, {timestap: true});

const User = mongoose.model("User", userSchema);

module.exports = User;