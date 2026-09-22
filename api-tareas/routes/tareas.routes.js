const express = require("express");
const mongoose = require("mongoose");
const Tarea = require("../models/Tarea");

const router = express.Router();

// GET /api/tareas
router.get("/", async (req, res) => {
  try {
    const tareas = await Tarea.find();

    res.status(200).json({
      mensaje: "Tareas obtenidas correctamente",
      tareas
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener las tareas",
      error: error.message
    });
  }
});

// GET /api/tareas/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        mensaje: "El ID no es válido"
      });
    }

    const tarea = await Tarea.findById(id);

    if (!tarea) {
      return res.status(404).json({
        mensaje: "Tarea no encontrada"
      });
    }

    res.status(200).json({
      mensaje: "Tarea obtenida correctamente",
      tarea
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener la tarea",
      error: error.message
    });
  }
});

// POST /api/tareas
router.post("/", async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);

    res.status(201).json({
      mensaje: "Tarea creada correctamente",
      tarea
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Datos de tarea inválidos",
      error: error.message
    });
  }
});

// PUT /api/tareas/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        mensaje: "El ID no es válido"
      });
    }

    const tarea = await Tarea.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!tarea) {
      return res.status(404).json({
        mensaje: "Tarea no encontrada"
      });
    }

    res.status(200).json({
      mensaje: "Tarea actualizada correctamente",
      tarea
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo actualizar la tarea",
      error: error.message
    });
  }
});

// DELETE /api/tareas/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        mensaje: "El ID no es válido"
      });
    }

    const tarea = await Tarea.findByIdAndDelete(id);

    if (!tarea) {
      return res.status(404).json({
        mensaje: "Tarea no encontrada"
      });
    }

    res.status(200).json({
      mensaje: "Tarea eliminada correctamente",
      tarea
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar la tarea",
      error: error.message
    });
  }
});

module.exports = router;