const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    day: String,
    exercises: [{ ref: "Exercise", type: Schema.types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

module.exports = daySchema;
