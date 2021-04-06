const router = require("express").Router();
const validation = require("../validations/userValidation");
const intercept = require("../validations/intercept");
//const express = require("express");
//const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

const userController = require("../controllers/userController");

router.get("/users", userController.getAll);

router.post("/users", validation.create(), intercept, userController.create);
//Metodo createrouter.post("/users", userController.create)
router.delete("/users/:id", userController.delete);

router.put("/users/:id", userController.update);

module.exports = router;
