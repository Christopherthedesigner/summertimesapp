// routes/dashboard.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Route for the dashboard
router.get('/', dashboardController);

module.exports = router;
