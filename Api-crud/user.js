const Sequelize = require("sequelize");
const sequelize = require("./db");
const database = require("./db");

const user = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
  createat: {
    type: sequelize.DATE,
    allowNull: false,
  },
  updateat: {
    type: sequelize.DATE,
    allowNull: false,
  },
});
module.exports = userSequelize;
