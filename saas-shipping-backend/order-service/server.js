const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Order Service running on port ${port}`);
    });
}).catch(err => console.log('Error: ' + err));
