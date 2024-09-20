// app.js
const express = require('express');
const app = express();
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const path = require('path');
const dashboardRouter = require('./routes/dashboard');
const registerRouter = require('./routes/register'); 

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use('/register', registerRouter);

// Route for the registration endpoint
app.post('/register', (req, res) => {
  const { firstname, lastname, dob } = req.body;

  // db sql query
  db('registrations')
    .insert({ firstname, lastname, dob })
    // then statement
    .then(() => {
      res.send('Registration Successful!');
    })
    // catch statement
    .catch((err) => {
      res.status(500).send('Registration failed.');
    });
});

// Use the dashboard router
app.use('/dashboard', dashboardRouter);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
