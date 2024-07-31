const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('saas_user', 'user_user', 'Qasim@123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
