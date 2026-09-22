require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const tareasRoutes = require("./routes/tareas.routes");

app.use("/api/tareas", tareasRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Error al conectar MongoDB:", error));

app.get("/", (req, res) => {
  res.json({ mensaje: "API de tareas académicas funcionando" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});