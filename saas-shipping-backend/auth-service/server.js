const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./config/database');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors

// Routes
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Auth service running on port ${port}`);
  });
}).catch(err => console.log('Error: ' + err));
