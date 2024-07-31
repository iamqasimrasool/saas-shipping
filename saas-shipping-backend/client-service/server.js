const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clientRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3004;

// Middleware
app.use(bodyParser.json());

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.error('Error: ', err);
  });

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized...');
  });

// Routes
app.use('/api/clients', clientRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Client service running on port ${port}`);
});
