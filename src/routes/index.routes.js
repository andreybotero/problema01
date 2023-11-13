import { Router } from "express";
import studentsRouts from "./students.routes.js";
import courseRoutes from "./course.routes.js"


const rotas = Router();

rotas.use("/students", studentsRouts);

rotas.use("/course", courseRoutes)

rotas.get("/", (req, res) => {
  return res.status(200).send({ mensagem: "Servidor OK" });
});



export default rotas;
