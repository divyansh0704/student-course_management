import React from 'react'
import { useState } from 'react';
import axios from 'axios'


const EnrollForm = ({fetchStudents}) => {
  const [studentId,setStudentId] = useState("");
  const [courseId,setCourseId] = useState("");
  const handleEnroll = async()=>{
    if(!studentId || !courseId){
      alert("Please fill all fields");
    }
    await axios.post("http://localhost:3000/api/enrollments",{
      studentId,
      courseId
    });
    setStudentId("");
    setCourseId("");
    alert("Student enrolled in course!")
    fetchStudents();
  }
  return (
    <div>
      <h2>Enroll Student</h2>
      <input type="number" placeholder='Student ID' value={studentId} onChange={(e)=>setStudentId(e.target.value)} />
      <input type="number" placeholder='Course ID' value={courseId} onChange={(e)=>setCourseId(e.target.value)} />
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  )
}

export default EnrollForm