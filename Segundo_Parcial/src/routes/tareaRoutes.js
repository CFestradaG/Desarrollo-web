import { Router } from "express";
import { crear, listar, obtener, actualizar, eliminar } from "../controllers/tareaController.js";
import auth from "../middleware/auth.js";
const router = Router();
// TODO FASE 5: POST, PUT y DELETE deben quedar protegidos con auth.
// router.post("/", crear);
// router.get("/", listar);
// router.get("/:id", obtener);
// router.put("/:id", actualizar);
// router.delete("/:id", eliminar);

router.post("/", auth, crear);
router.get("/", listar);
router.get("/:id", obtener);
router.put("/:id", auth, actualizar);
router.delete("/:id", auth, eliminar);

export default router;
