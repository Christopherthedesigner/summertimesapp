// controllers/registerController.js
const path = require('path');

// Controller function for handling registration form submission
const registerController = (req, res) => {
  const { firstname, lastname, dob } = req.body;

  // Assuming a similar registration logic as in your app.js
  db('registrations')
    .insert({ firstname, lastname, dob })
    .then(() => {
      res.send('Registration Successful!');
    })
    .catch((err) => {
      res.status(500).send('Registration failed.');
    });
};

module.exports = registerController;