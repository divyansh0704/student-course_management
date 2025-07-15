import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const StudentForm = ({fetchStudents}) => {
  const [form,setForm] = useState({name:"",email:""});
  const handleSubmit = async()=>{
    if(!form.name.trim() || !form.email.trim()){
      alert("Please fill all the fields");
    }
    await axios.post("https://student-course-management-wvtf.onrender.com/api/students",form);
    setForm({name:"",email:""});
    alert("Student added!");
    fetchStudents();
  }
 
  return (
    <div>
      <h2>Add Student</h2>
      <input type="text" placeholder='Student Name' value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
      <input type="text" placeholder='Email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
      <button onClick={handleSubmit}>Add Student</button>
    </div>
  )
}

export default StudentForm