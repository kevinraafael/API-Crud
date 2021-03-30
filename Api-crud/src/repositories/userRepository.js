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
      const query = `DELETE FROM "user" where id=$1;`;
      const deletedUser = await client.query(query, [id]);
      return true;
    } catch (e) {
      console.log(`erro no delete ${e.message}`);
      return false;
    }
  },
  update: async (id, { name, email, password }) => {
    const client = await pool.connect();
    try {
      const query = `UPDATE "user" SET "name"='${name}', "email"='${email}', "password"='${password}' WHERE "id"='${id}';`;
      const updatedUser = await client.query(query);
      return true;
      //const values = [name, email, password, id];
      //const updatedUser = client.query(query, this.updateAt);
    } catch (e) {
      console.log(`erro no updateController ${e.message}`);
      return false;
    }
  },
};

module.exports = repository;
