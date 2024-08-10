const Sequelize = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite',
});

module.exports = sequelize;
