const Student = require('../models/student');
const Course = require('../models/course');

exports.enrollStudent = async (req, res) => {
    const { studentId, courseId } = req.body;
    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
        return res.status(404).json({ message: 'Student or Course not found' });
    }

    await student.addCourse(course);
    res.json({ message: "enrollment successful" });
}
exports.studentWithCourses = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: {
                model: Course,
                through: { attributes: [] }
            }
        })
        res.json(students);

    } catch {
        res.status(500).json({ message: 'Error fetching student with courses' });
    }
}