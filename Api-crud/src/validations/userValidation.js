const { body, param } = require("express-validator");

const validation = {
  create: () => {
    return [body("email").isEmail(), body("password").isLength({ min: 5 })];
  },
  update: () => {
    return [
      body("name").isLength({ min: 4 }),
      body("email").isEmail(),
      body("password").isLength({ min: 5 }),
    ];
  },
  delete: () => {
    return [param("id").notEmpty(), param("id").isLength({ min: 1 })];
  },
  /*get: () => {
    return [check(["localhost:3000/users"])];
  },*/
  // react navigation e talvez styled components
};

module.exports = validation;
