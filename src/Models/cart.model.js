const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    restaurentName: { type: String, required: true },
    contactName: { type: String, require: true },
    pincode: { type: String, required: true, min: 6, max: 6 },
    location: { type: String, required: true, min: 1 },
    website: { type: String, required: true },
    phoneNumber: { type: String, required: true, min: 10, max: 10 },
    averageTransaction: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("cart", cartSchema);
