const { body, param } = require("express-validator");

const validation = {
  create: () => {
    return [
      body("email").isEmail(),
      body("cpf").isLength({ min: 11 }),
      body("password").isLength({ min: 5 }),
    ];
  },
  update: () => {
    return [
      param("id").notEmpty(),
      param("id").isLength({ min: 1 }),
      body("name").isLength({ min: 4 }),
      body("email").isEmail(),
      body("password").isLength({ min: 5 }),
    ];
  },
  delete: () => {
    return [param("id").notEmpty(), param("id").isLength({ min: 1 })];
  },

  // react navigation e talvez styled components
};

module.exports = validation;
