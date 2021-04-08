const { findById2 } = require("../repositories/userRepository");
const userRepository = require("../repositories/userRepository");

const resources = {
  getAll: async (req, res) => {
    try {
      const users = await userRepository.getAll();

      if (!users) {
        throw new Error("Não foi possível pegar os usuários");
      }

      res.send({ users });
    } catch (e) {
      console.log(e);
      res.status(400).send({ e });
    }
  },
  create: async (req, res) => {
    try {
      const newUser = await userRepository.create(req.body);
      res.send({ newUser });
    } catch (e) {
      console.log(e);
      res.status(400).send({ e, message: "Erro no create" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const hasUser = await userRepository.findById(id);

      if (!hasUser) {
        throw new Error("Não existe esse usuário.");
      }

      const userDelete = await userRepository.delete(id);

      if (!userDelete) {
        throw new Error("Erro apagar.");
      }

      res.send({ message: "apagado com sucesso" });
      return true;
    } catch (e) {
      res
        .status(400)
        .send({ e: e.message, message: "Houve um erro no delete" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;

    try {
      const hasUser = await userRepository.findById(id);

      if (!hasUser) {
        throw new Error("Não existe esse usuário.");
      }

      const userUpdated = await userRepository.update(id, req.body);

      if (!userUpdated) {
        throw new Error("Erro atualizar.");
      }

      res.send();
    } catch (e) {
      console.log(e);
      res.status(400).send({ e: e.message, message: "Erro no update" });
      return false;
    }
  },
};

module.exports = resources;
