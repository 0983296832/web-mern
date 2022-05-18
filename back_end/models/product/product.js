const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: "ImageProduct" }],
  details: { type: Array },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  desc: {
    type: String,
  },
  views: {
    type: Number,
  },
  sales: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: "supplier" }],
});
const productsDB = mongoose.model("products", productSchema);

module.exports = productsDB;
