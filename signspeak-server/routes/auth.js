// routes/auth.js
const express = require('express');
const router = express.Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // This is just a dummy implementation
  res.status(200).json({
    message: `Logged in as ${email}`,
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Dummy response
  res.status(201).json({
    message: `User registered with email: ${email}`,
  });
});

module.exports = router;
