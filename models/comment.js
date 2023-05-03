const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
});

// Virtual for formatted date
CommentSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

// JSON virtual true
CommentSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Comment", CommentSchema);
