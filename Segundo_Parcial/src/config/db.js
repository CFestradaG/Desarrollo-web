import mongoose from "mongoose";

export default async function conectarDB() {
  // TODO FASE 2: conectar con process.env.MONGO_URI.
  await mongoose.connect(process.env.MONGO_URI);
  // No escriba la URI directamente en este archivo.
  console.log("Conectado a MongoDB");
}
