// user-service/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure the path is correct

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ClientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = User;
