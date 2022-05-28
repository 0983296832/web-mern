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
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: "imageproducts" }],
  details: { type: Array },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  desc: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
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
  createdAt: { type: Date },
});

productSchema.index({ product_code: "text" });
const productsDB = mongoose.model("products", productSchema);
productsDB.createIndexes({ product_code: "text" });

module.exports = productsDB;
