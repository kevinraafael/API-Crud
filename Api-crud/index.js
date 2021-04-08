const express = require("express");
const app = express();

const router = require("express").Router();

app.use(express.json());

app.use("/", require("./src/routes/userRoute"));

app.listen(3000);

/*
Antes de começar a mexer com as telas
1- Adicionar os campos: data(date),telefone(varchar),cpf(varchar) sendo esses Unique
 
*/
