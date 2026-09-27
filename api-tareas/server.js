require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const tareasRoutes = require("./routes/tareas.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API de tareas académicas funcionando" });
});

app.use("/api/tareas", tareasRoutes);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "Ruta no encontrada",
    ruta: req.originalUrl
  });
});

// Convierte también los errores del parser JSON de Express a respuestas JSON.
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({ mensaje: "El cuerpo de la solicitud no contiene JSON válido" });
  }

  console.error("Error interno:", error);
  return res.status(500).json({ mensaje: "Error interno del servidor" });
});

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  if (!process.env.MONGODB_URI) {
    console.error("Falta definir MONGODB_URI en el archivo .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar con MongoDB:", error.message);
    process.exit(1);
  }
}

iniciarServidor();
