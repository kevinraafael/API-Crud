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
      res.send({ userDelete });
    } catch (e) {
      res.status(400).send({ e, message: "Erro no delete" });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    try {
      //const hasUser = await userRepository.findById2(id);
      //if (hasUser == true) {
      //const id = req.params.id;
      const userUpdate = await userRepository.update(id, req.body);
      //res.send();
      //} else {
      //console.log("Usuario nao encontrado");
      //}
    } catch (e) {
      res.status(400).send({ e, message: "Erro no update" });
      //Validação de rota
      // usar sqlize
    }
  },
};

module.exports = resources;
