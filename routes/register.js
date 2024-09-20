// routes/register.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Route to render the registration form
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'register.html'));
});

module.exports = router;
