const mongoose = require("mongoose");

const detectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sign: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Detection", detectionSchema);
