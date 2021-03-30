const pool = require("../../db");

const repository = {
  getAll: async () => {
    const client = await pool.connect();
    try {
      const query = `select * from "user";`;
    } catch (e) {
      return false;
    } finally {
      await client.release();
    }
  },
  create: async ({ name, email, password }) => {
    const client = await pool.connect();
    try {
      const query = `INSERT into "user" (name,email,password, createat) VALUES ($1, $2, $3, $4) RETURNING *;`;

      const newUser = await client.query(query, [
        name,
        email,
        password,
        new Date(),
      ]);
      console.log(newUser);
      return newUser.rows;
    } catch (e) {
      console.log("erro no create", e.message);
      return false;
    }
  },
  delete: async ({ id }) => {
    const client = await pool.connect();
    try {
      const query = `DELETE FROM user where id= VALUE(${id})`;
    } catch (e) {
      console.log("erro no delete");
      res.status(400).send({ e });
    }
  },
  update: async ({ name, email, password, id }) => {
    const client = await pool.connect();
    try {
      const query = `UPDATE  user  SET name =${name},${email}${id}`;
    } catch (e) {
      console.log("erro no update");
      res.status(400).send({ e });
    }
  },
};

module.exports = repository;
