const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Cargar datos desde el archivo data.js
const data = require("./data.js");

// Ruta para mostrar la página de actividades
app.get("/", (req, res) => {
  const tasks = data.tasks;

  res.render("index", {
    allActivities: Object.values(tasks),
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
