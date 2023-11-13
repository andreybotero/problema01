import { Router } from "express";

import {
  createStudent,
  deleteStudent,
  findStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/students.controller.js";


const studentsRouts = Router();

studentsRouts.get("/", getAllStudents);
studentsRouts.get("/:id", findStudent);
studentsRouts.post("/", createStudent);
studentsRouts.put("/:id", updateStudent);
studentsRouts.delete("/:id", deleteStudent);


export default studentsRouts;
