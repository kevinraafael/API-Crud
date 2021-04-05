const Sequelize = require("sequelize");
const sequelize = require("./db");
const database = require("./db");

const User = database.define("User", {
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
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  createat: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updateat: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
module.exports = User;
