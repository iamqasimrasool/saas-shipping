const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`User service running on port ${port}`);
    });
}).catch(err => console.error('Error syncing database:', err));
