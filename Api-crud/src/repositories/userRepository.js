const user = require("../database/user");
const repository = {
  getAll: async () => await user.findAll(),
  create: async ({
    name,
    email,
    telefone,
    datadenascimento,
    cpf,
    password,
  }) => {
    try {
      const newUser = await user.create({
        name: name,
        email: email,
        telefone: telefone,
        datadenascimento: datadenascimento,
        cpf: cpf,
        password: password,
      });
      return newUser;
    } catch (e) {
      console.log("Erro no create Repository", e);
    }
  },
  findById: async (id) => await user.findByPk(id),
  delete: async (id) => {
    try {
      const destroy = await user.destroy({
        where: {
          id,
        },
      });

      return !!destroy;
    } catch (e) {
      return false;
    }
  },
  update: async (id, { name, email, telefone, cpf, password }) => {
    try {
      const update = await user.update(
        {
          name,
          email,
          telefone,
          cpf,
          password,
        },
        {
          where: {
            id,
          },
        }
      );

      return !!update[0];
    } catch (e) {
      console.log("Erro no update repository", e);
      return false;
    }
  },
};

module.exports = repository;
