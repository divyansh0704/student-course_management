import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import ("./App.css")
import StudentForm from "./components/StudentForm";
import CourseForm from "./components/CourseForm";
import EnrollForm from "./components/EnrollForm";
import EnrolledList from "./components/EnrolledList";


function App(){

  const [students,setStudents]=useState([]);

    const fetchData = async()=>{
        const res = await axios.get("http://localhost:3000/api/enrollments/student-with-courses")
        setStudents( res.data)
    };
    useEffect(()=>{
        fetchData();
    },[])
  return(
    <div className="container">
      <h1>Student Course Enrollment</h1>
      <StudentForm  fetchStudents = {fetchData}/>
      <CourseForm/>
      <EnrollForm fetchStudents = {fetchData} />
      <EnrolledList students = {students}/>

    </div>
  )
}


export default App;
