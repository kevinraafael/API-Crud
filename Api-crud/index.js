const express = require("express");
const User = require("./user");
const app = express();

const router = require("express").Router();

app.use(express.json());

//app.use("/", require("./src/routes/userRoute"));

app.use("/", require("./user"));
/*try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}*/

(async () => {
  const db = require("./db");
  // try {
  //   const resultado = await db.sync();
  //   //console.log("resultado", resultado);
  // } catch (e) {
  //   console.log(e);
  // }
  const resultadoCreate = await User.create({
    name: "Kevin",
    email: "rafael@sequelizer",
    password: "45637",
  });
  console.log(resultadoCreate);

  // const
  const findUser = await User.findByPk(1); // retorna o usuario com esse id
})();

app.listen(3000);
