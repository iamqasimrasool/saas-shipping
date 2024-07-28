const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const clientRoutes = require('./routes/clientRoutes');
const { sequelize } = require('./config/database');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(cors()); // Use cors

// Routes
app.use('/clients', clientRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Client service running on port ${port}`);
  });
}).catch(err => console.log('Error: ' + err));
