const sequelize = require("../config/db");
const Sequelize = require("sequelize");
const uuid = require("uuid");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
    },
    about: {
      type: Sequelize.STRING,
    },
    experience: {
        type: Sequelize.STRING,
    },
    achievements: {
      type: Sequelize.STRING,
    },
  },
 
);

module.exports = User;