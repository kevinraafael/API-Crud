/*const { Pool } = require("pg");

const pool = new Pool({
  host: "172.18.80.45",
  user: "renato",
  password: "123456",
  database: "uberizacao",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;*/

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://renato:123456@172.18.80.45:5432/uberizacao",
  {
    dialect: "postgres",
  }
);

module.exports = sequelize;
