import { Router } from "express";
import { getCourse, getCourseById, createCourse, updateCourse, deleteCourse } from "../controllers/course.controller.js";

const coursesRoutes = Router();

coursesRoutes.get("/", getCourse);

coursesRoutes.get("/", createCourse);

coursesRoutes.get("/:id", getCourseById);

coursesRoutes.get("/:id", updateCourse);

coursesRoutes.get("/:id", deleteCourse);


export default coursesRoutes;