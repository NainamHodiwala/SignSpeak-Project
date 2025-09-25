// routes/detections.js
const express = require('express');
const router = express.Router();

const { saveDetection, getDetections } = require('../controllers/detectionController');
const { protect } = require('../middleware/auth');

// POST /api/detections - Save detection (protected route)
router.post('/', protect, saveDetection);

// GET /api/detections - Get user detections (protected route)
router.get('/', protect, getDetections);


module.exports = router;
