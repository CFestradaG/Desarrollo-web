import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  // TODO FASE 5:
  // 1. Leer Authorization: Bearer TOKEN
  // 2. Verificar JWT con process.env.JWT_SECRET
  // 3. Guardar identidad del usuario en req.usuario
  // 4. Responder 401 cuando falte o sea inválido

  const authorization = req.headers.authorization;

if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Token no proporcionado"
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Token inválido o expirado"
    });
  }
  //return res.status(501).json({ error: "Middleware pendiente" });
}
