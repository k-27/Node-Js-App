
const dotenv = require('dotenv');
dotenv.config();
const Sequelize  = require('sequelize');

const sequelize = new Sequelize( process.env.MYSQL_DB_NAME, process.env.MYSQL_DB_USER, process.env.MYSQL_DB_PASSWORD, {
  host: process.env.MYSQL_DB_HOST,
  dialect: "mysql", 
  port: process.env.MYSQL_DB_PORT,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;