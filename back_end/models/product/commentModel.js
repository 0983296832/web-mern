const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author_id: { type: String, required: true },
  content: { type: String, required: true },
  reply: { type: Array },
  vote: { type: Number, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = commentDB = mongoose.model("comments", commentSchema);
