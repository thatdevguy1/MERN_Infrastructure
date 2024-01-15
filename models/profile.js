const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    weight: Number,
    height: String,
    Program: { ref: "Program", type: Schema.types.ObjectId },
  },
  {
    timestamps: true,
  }
);

module.exports = profileSchema;
