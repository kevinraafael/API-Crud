const { body } = require("express-validator");
const validation = {
  create: () => {
    return [body("email").isEmail(), body("password").isLength({ min: 5 })];
  },
};

module.exports = validation;
