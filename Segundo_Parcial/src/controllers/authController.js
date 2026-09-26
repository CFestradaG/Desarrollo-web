import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

export async function registro(req, res) {
  // TODO FASE 4:
  // validar datos, evitar email duplicado, aplicar hashing y no devolver password.
  //return res.status(501).json({ error: "Registro pendiente" });

  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({
        error: "Nombre, email y password son obligatorios"
      });
    }

    const usuarioExiste = await Usuario.findOne({ email: email.toLowerCase() });

    if (usuarioExiste) {
      return res.status(400).json({
        error: "El email ya está registrado"
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const usuario = await Usuario.create({
      nombre,
      email,
      password: passwordHash
    });

    return res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al registrar usuario" });
  }
}

export async function login(req, res) {
  // TODO FASE 5:
  // localizar usuario, comparar hash y generar JWT con JWT_SECRET.
  //return res.status(501).json({ error: "Login pendiente" });
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email y password son obligatorios"
      });
    }

    const usuario = await Usuario.findOne({ email: email.toLowerCase() });

    if (!usuario) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    const isMatch = await bcrypt.compare(password, usuario.password);

    if (!isMatch) {
      return res.status(401).json({
        error: "Password incorrecta"
      });
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      mensaje: "Login exitoso",
      token
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al iniciar sesión" });
  }
}
