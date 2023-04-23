const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  //   date: {
  //     type: Date,
  //     default: Date.now,
  //     required: true,
  //   },
  //   published: {
  //     type: Boolean,
  //     default: false,
  //     required: true,
  //   },
});

module.exports = mongoose.model("Post", PostSchema);
