const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  title: String,
  content: String,
});

mongoose.model("post", post);
module.exports = post;
