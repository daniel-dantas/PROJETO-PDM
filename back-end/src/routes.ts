import Router from "express";

import ClassController from "./controllers/ClassController";
import UserController from "./controllers/UserController";

const router = Router();
// Usuer Routes
router.post("/usuario", UserController.create);
router.get("/usuario", UserController.read);
router.post("/usuario/auth", UserController.auth);


// Usuer Routes
router.post("/turma", ClassController.create);
router.get("/turma", ClassController.read);
router.get("/turma/:id", ClassController.get);
router.post("/turma/:id", ClassController.update);
export default router;

