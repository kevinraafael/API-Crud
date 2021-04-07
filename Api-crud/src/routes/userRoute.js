const router = require("express").Router();
const validation = require("../validations/userValidation");
const intercept = require("../validations/intercept");

const userController = require("../controllers/userController");

router.get("/users", userController.getAll);

router.post("/users", validation.create(), intercept, userController.create);
//Metodo createrouter.post("/users", userController.create)
router.delete(
  "/users/:id",
  validation.delete(),
  intercept,
  userController.delete
);

router.put("/users/:id", validation.update(), intercept, userController.update);

module.exports = router;
