import mongoose from "mongoose";
import Tarea from "../models/Tarea.js";

export async function crear(req, res) {
  // TODO FASE 3: crear tarea y asociarla al usuario autenticado.
   try {
    const { titulo, descripcion, estado, prioridad } = req.body;

    if (!titulo || !descripcion) {
      return res.status(400).json({
        error: "Título y descripción son obligatorios"
      });
    }

    const tarea = await Tarea.create({
      titulo,
      descripcion,
      estado,
      prioridad,
      creadoPor: req.usuario.id
    });

    return res.status(201).json(tarea);
  } catch (error) {
    return res.status(400).json({ error: "No se pudo crear la tarea" });
  }

  //return res.status(501).json({ error: "Pendiente" });

}
export async function listar(req, res) {
  // TODO FASE 3
   try {
    const tareas = await Tarea.find()
      .populate("creadoPor", "nombre email");

    return res.status(200).json(tareas);
  } catch (error) {
    return res.status(500).json({ error: "No se pudieron obtener las tareas" });
  }
  //return res.status(501).json({ error: "Pendiente" });
}
export async function obtener(req, res) {
  // TODO FASE 3: 404 si no existe.
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Id de tarea inválido" });
    }

    const tarea = await Tarea.findById(id)
      .populate("creadoPor", "nombre email");

    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    return res.status(200).json(tarea);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener la tarea" });
  }
  
  //return res.status(501).json({ error: "Pendiente" });
}
export async function actualizar(req, res) {
  // TODO FASE 3: actualizar y devolver resultado; 404 si no existe.
  try {
    const { id } = req.params;
    const { titulo, descripcion, estado, prioridad } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Id de tarea inválido" });
    }

    const tarea = await Tarea.findByIdAndUpdate(
      id,
      { titulo, descripcion, estado, prioridad },
      { new: true }
    ).populate("creadoPor", "nombre email");

    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    return res.status(200).json(tarea);
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar la tarea" });
  }
}
export async function eliminar(req, res) {
  // TODO FASE 3: eliminar; 404 si no existe.
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Id de tarea inválido" });
    }

    const tarea = await Tarea.findByIdAndDelete(id);

    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    return res.status(200).json({
      mensaje: "Tarea eliminada correctamente"
    });
  } catch (error) {
    return res.status(500).json({ error: "No se pudo eliminar la tarea" });
  }
  //return res.status(501).json({ error: "Pendiente" });
}
