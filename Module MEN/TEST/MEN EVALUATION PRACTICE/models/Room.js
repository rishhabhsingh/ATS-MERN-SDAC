const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  roomType: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  capacity: { type: Number, required: true },
});

module.exports = mongoose.model("Room", roomSchema);