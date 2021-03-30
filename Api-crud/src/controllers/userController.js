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
      res.status(400).send({ e });
    }
  },
  delete: async (req, res) => {
    try {
      const userDelete = await userRepository.delete(req.params);
      res.send("Usuario deletado com sucesso");
    } catch (e) {
      console.log("erro no delete Controller");
      res.status(400).send({ e });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const userUpdate = await userRepository.update(id, req.body);
      res.send(console.log("usuario atualizado com sucesso"));
    } catch (e) {
      console.log("erro no update");
      res.status(400).send({ e });
    }
  },
};

module.exports = resources;
