// controllers/dashboardController.js
const path = require('path');

// Controller function for the dashboard route
const dashboardController = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dashboard.html'));
};

module.exports = dashboardController;

