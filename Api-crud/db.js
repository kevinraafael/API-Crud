const { Pool } = require("pg");

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

module.exports = pool;
