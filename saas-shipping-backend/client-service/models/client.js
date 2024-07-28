// client-service/models/client.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // This is where your Sequelize instance should be initialized

const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true
});

module.exports = Client;
