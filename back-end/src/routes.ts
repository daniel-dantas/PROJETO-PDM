import Router from "express";

import ClassController from "./controllers/ClassController";
import UserController from "./controllers/UserController";

const router = Router();
// Usuer Routes
router.post("/usuario", UserController.create);
router.get("/usuario", UserController.read);
router.post("/usuario/auth", UserController.auth);
router.post("/usuario/auth/refresh", UserController.refresh);

router.post("/turma/matricular", ClassController.matricular)

// Usuer Routes
router.post("/turma", ClassController.create);
router.get("/turma", ClassController.read);
router.get("/turma/:id", ClassController.get);

export default router;

