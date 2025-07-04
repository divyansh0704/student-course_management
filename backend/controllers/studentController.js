const Student = require("../models/student");
const Course = require("../models/course");

exports.createStudent = async (req, res) =>{
    const student = await Student.create(req.body);
    res.status(201).json({message: "Student created successfully", student});

}

exports.getStudentCourses= async (req,res)=>{
     try {
    const student = await Student.findByPk(req.params.id, {
      include: Course,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses for student" });
  }
}