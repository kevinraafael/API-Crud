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
      const userDelete = await userRepository.delete(req.params);
      res.send({ message: "usuario nao encontrado" });
      return true;
    } catch (e) {
      res.status(400).send({ e, message: "Houve um erro no delete" });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    try {
      const hasUser = await userRepository.findById(id);
      if (hasUser != null) {
        const userUpdated = await userRepository.update(id, req.body);
        res.send();
      } else {
        res.send();
      }
      return true;
    } catch (e) {
      res.status(400).send({ e, message: "Erro no update" });
      return false;
    }
  },
};

module.exports = resources;
