const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getAll);

router.post("/users", userController.create);
//Metodo createrouter.post("/users", userController.create)
router.delete("/users", userController.delete);

router.put("/users", userController.update);

module.exports = router;
