const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema(
  {
    name: String,
    exercise: { ref: "Exercise", type: Schema.types.ObjectId },
    days: [{ ref: "Day", type: Schema.types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

module.exports = programSchema;
