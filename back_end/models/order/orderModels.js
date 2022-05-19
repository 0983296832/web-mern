const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  details: { type: Array },
  user_name: { type: String, required: true },
  created: {
    type: Date,
    default: Date.now(),
  },
  state: {
    type: String,
    required: true,
  },
  shipping_date: { type: Date },
  note: {
    type: String,
  },
  user_id: { type: String },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  payment_type: { type: String, required: true },
  received_date: { type: Date },
  payment_date: { type: Date },
  shipping_unit: { type: String, required: true },
  shipping_fee: { type: Number, required: true },
});
const ordersDB = mongoose.model("orders", orderSchema);

module.exports = ordersDB;
