const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true
    },
    curso: {
      type: String,
      required: [true, "El curso es obligatorio"],
      trim: true
    },
    descripcion: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      trim: true
    },
    fechaEntrega: {
      type: Date,
      required: [true, "La fecha de entrega es obligatoria"]
    },
    prioridad: {
      type: String,
      required: true,
      enum: ["BAJA", "MEDIA", "ALTA"]
    },
    estado: {
      type: String,
      required: true,
      enum: ["PENDIENTE", "EN_PROCESO", "COMPLETADA"],
      default: "PENDIENTE"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tarea", tareaSchema);