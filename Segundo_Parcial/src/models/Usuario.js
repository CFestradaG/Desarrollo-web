import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  // TODO FASE 2
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ["ADMIN", "USER"], default: "USER" }
}, { timestamps: true });

export default mongoose.model("Usuario", usuarioSchema);
