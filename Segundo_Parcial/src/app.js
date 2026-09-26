import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// TODO FASE 2: conectar con MongoDB usando conectarDB().
conectarDB();

app.get("/api/status", (req, res) => {
  // TODO FASE 1: responder HTTP 200 con:
  // { estado: "OK", aplicacion: "Parcial Desarrollo Web" }
  // res.status(501).json({ error: "Pendiente" });
    res.status(200).json({
    estado: "OK",
    aplicacion: "Parcial Desarrollo Web"
  });
});

// TODO FASE 3/4: habilitar las rutas /api/auth y /api/tareas.
app.use("/api/auth", authRoutes);
app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
