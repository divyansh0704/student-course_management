const Course = require("../models/course")
const Students = require("../models/student")

exports.createCourse = async (req,res)=>{
    const course = await Course.create(req.body);
    res.json(course);
}

exports.getCourseStudents = async (req,res)=>{
    const course = await Course.findByPk(req.params.id,{include:Students});
    res.json(course);
}