import Router from "express";

import ClassControoler from "./controllers/ClassController";
import UserControoler from "./controllers/UserController";

const router = Router();


// Usuer Routes
router.post("/usuario", UserControoler.create);
router.get("/usuario", UserControoler.read);
router.post("/usuario/auth", UserControoler.auth);


// Usuer Routes
router.post("/turma", ClassControoler.create);
router.get("/turma", ClassControoler.read);
router.get("/turma/:id", ClassControoler.get);

