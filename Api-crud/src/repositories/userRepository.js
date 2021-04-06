const user = require("../database/user");
const repository = {
  /*getAll: async () => {
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
  },*/
  create: async ({ name, email, password }) => {
    try {
      const newUser = await user.create({
        name: name,
        email: email,
        password: password,
      });
      return newUser;
    } catch (e) {
      console.log("Erro no create Repository", e);
    }
  },
  delete: async ({ id }) => {
    try {
      const findUserToDelete = await user.findByPk(id);
      findUserToDelete.destroy();
      res.send({ message: "Usuario deletado com sucesso" });
      return true;
    } catch (e) {
      res.send({ message: "Usuario não encontrado" });
      return false;
    }
  },

  /*findById2: async (id) => {
    const findUser = await user.findByPk(id);

    return findUser;
  },*/
  update: async (id, { name, email, password }) => {
    try {
      // tem que colocar a alteração que o usuário vai fazer nome, ou email/senha
      //const userUpdated = await this.findById2.save();
      const findUser = await user.findByPk(id);

      //if (findUser != null) {
      findUser.name = name;
      findUser.email = email;
      findUser.password = password;
      await findUser.save();
      // } else {
      //res.send({ message: "usuario nao encontrado" });
      //}
    } catch (e) {
      console.log("Erro no update repository");
    }
  },
};

module.exports = repository;
