const express = require("express");
const router = express.Router();
const {createStudent,getStudentCourses }=require("../controllers/studentController");

router.post("/",createStudent);
router.get("/:id/courses",getStudentCourses);

module.exports = router;

