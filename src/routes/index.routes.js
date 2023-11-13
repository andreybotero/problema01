import { Router } from "express";
import studentsRouts from "./students.routes.js";


const rotas = Router();

rotas.use("/students", studentsRouts);

rotas.get("/", (req, res) => {
  return res.status(200).send({ mensagem: "Servidor OK" });
});



export default rotas;
