const mongoose = require("mongoose");
const expSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
const Exp = mongoose.model("Exp", expSchema);
module.exports = Exp;
