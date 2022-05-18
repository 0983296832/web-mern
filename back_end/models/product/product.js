const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_code: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },

  price: {
    type: Number,
    required: true,
  },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: "productImage" }],
  details: [
    {
      type: Object,
    },
  ],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  category: {
    type: String,
    required: true,
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
