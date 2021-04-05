const express = require("express");
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
  try {
    const resultado = await db.sync();
    console.log("resultado", resultado);
  } catch (e) {
    console.log(e);
  }
})();

app.listen(3000);
