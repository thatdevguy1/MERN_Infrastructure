const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: String,
    image: String,
    muscelTarget: [String],
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = exerciseSchema;
