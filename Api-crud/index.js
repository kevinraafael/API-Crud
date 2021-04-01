const express = require("express");
const app = express();

app.use(express.json());

//app.use("/", require("./src/routes/userRoute"));

async () => {
  const database = require("./db");
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (e) {
    console.log(error);
  }
};

app.listen(3000);
