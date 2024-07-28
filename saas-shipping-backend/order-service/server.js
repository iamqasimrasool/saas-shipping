const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./config/database');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

app.use('/orders', orderRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Order service running on port ${port}`);
  });
}).catch(err => console.error('Error syncing database:', err));
