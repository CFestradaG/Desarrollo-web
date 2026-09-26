import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  estado: {
    type: String,
    enum: ["PENDIENTE", "EN_PROCESO", "COMPLETADA"],
    default: "PENDIENTE"
  },
  prioridad: {
    type: String,
    enum: ["BAJA", "MEDIA", "ALTA"],
    default: "MEDIA"
  },
  creadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Tarea", tareaSchema);
