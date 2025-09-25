// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/auth');
const detectionRoutes = require('./routes/detections');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);          // e.g., /api/auth/login
app.use('/api/detections', detectionRoutes); // e.g., /api/detections

// Root Endpoint
app.get('/', (req, res) => {
  res.send('👋 Welcome to SignSpeak API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:5000`);
});
