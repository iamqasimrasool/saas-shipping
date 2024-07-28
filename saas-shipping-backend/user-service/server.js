const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./config/database');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`User service running on port ${port}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
