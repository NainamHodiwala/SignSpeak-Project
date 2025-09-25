// controllers/detectionController.js
const Detection = require('../models/detectionModel');

exports.saveDetection = async (req, res) => {
  const { sign } = req.body;
  try {
    const detection = await Detection.create({
      user: req.user.id,
      sign
    });
    res.status(201).json(detection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDetections = async (req, res) => {
  try {
    const detections = await Detection.find({ user: req.user.id })
      .sort({ timestamp: -1 })
      .limit(10);
    res.json(detections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
