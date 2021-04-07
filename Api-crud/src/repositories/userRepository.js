const user = require("../database/user");
const repository = {
  getAll: async () => {
    try {
      //const allUsers = await user.getTableName();
      return await user.findAll();
    } catch (e) {
      return false;
    } finally {
    }
  },
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
  findById: async (id) => {
    try {
      return await user.findByPk(id);
    } catch (e) {
      console.log(e);
    }
  },
  delete: async ({ id }) => {
    try {
      const findUser = await user.findByPk(id);
      findUser.destroy();
      res.send({ message: "usuario deletado com sucesso" });
      return true;
    } catch (e) {
      return false;
    }
  },
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
      console.log("update");
      return true;
    } catch (e) {
      console.log("Erro no update repository", e);
      return false;
    }
  },
};

module.exports = repository;
