const express = require("express");
const router = express.Router();
const {enrollStudent,studentWithCourses}= require("../controllers/enrollmentController");

router.post("/",enrollStudent);
router.get("/student-with-courses",studentWithCourses);

module.exports = router;