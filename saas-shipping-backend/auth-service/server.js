const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Auth service running on port ${port}`);
    });
}).catch(err => console.error('Error syncing database:', err));
