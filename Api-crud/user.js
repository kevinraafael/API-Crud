const Sequelize = require("sequelize");
const sequelize = require("./db");
const database = require("./db");

const user = database.define(
  "user",
  {
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
      defaultValue: true,
    },
    createat: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updateat: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  {
    modelName: "user",
    freezeTableName: true,
  }
);
module.exports = user;
