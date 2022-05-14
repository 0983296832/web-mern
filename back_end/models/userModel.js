const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
  sex: {
    type: String,
  },
  address: {
    type: String,
  },
  birth: {
    type: Date,
  },
  role: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
  },
  orders: {
    type: Array,
  },
});
const usersDB = mongoose.model("users", userSchema);

module.exports = usersDB;
// mutiple export
// module.exports ={Productdb, post} ;
