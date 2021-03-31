const pool = require("../../db");
const finded = false;
const repository = {
  getAll: async () => {
    const client = await pool.connect();
    try {
      const query = `select * from "user";`;
      const users = await client.query(query);
      return users.rows;
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
      return false;
    } finally {
      await client.release();
    }
  },
  delete: async ({ id }) => {
    const client = await pool.connect();
    try {
      const query = `DELETE FROM "user" where id=$1;`;
      const deletedUser = await client.query(query, [id]);
      return true;
    } catch (e) {
      return false;
    } finally {
      await client.release();
    }
  },

  findById2: async (id) => {
    const client = await pool.connect();
    const findByIdQuery = `select * from "user" WHERE id=$1`;
    const userFinded = await client.query(findByIdQuery, [id]);

    return userFinded.rowCount > 0;
  },
  update: async (id, { name, email, password, active }) => {
    const client = await pool.connect();

    try {
      //const hasUser = await repository.findById2(id);

      // if (hasUser == true) {
      const query = `UPDATE  "user" SET name = $1, email = $2, password = $3,active =$4, updateat = $5 WHERE "id" = $6;`;

      const updatedUser = await client.query(query, [
        name,
        email,
        password,
        active,
        new Date(),
        id,
      ]);
      return true;
      //}
    } catch (e) {
      console.log(e);
      return false;
    } finally {
      await client.release();
    }
  },
  /*userStatus: async ({ active }) => {
    const client = await pool.connect();
    try {
      const hasUser = await repository.findById2(id);
      if (hasUser == true) {
        const query = `UPDATE  "user" SET active = $1 WHERE "id" = $2;`;

        const userStatus = await client.query(query, [active]);
      }
    } catch (e) {}
  },*/
};

module.exports = repository;
