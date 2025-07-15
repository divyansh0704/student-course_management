import React from 'react'
import axios from "axios"
import { useState } from 'react'

const CourseForm = () => {
  const [form,setForm]=useState({name:"",instructor:""})

  const handleSubmit = async()=>{
    if(!form.name.trim() || !form.instructor.trim()){
      alert("Please fill in all fields")
    }
    await axios.post('https://student-course-management-wvtf.onrender.com/api/courses',form)
    setForm({name:"",instructor:""})
    alert("Course Added!")
  }
  return (
    <div className='center'>
      <h2>Add Course</h2>
      <input type="text" placeholder="Course Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
      <input type="text" placeholder='instructor name' value={form.instructor} onChange={(e)=>setForm({...form,instructor:e.target.value})} />
      <button onClick={handleSubmit}>Add Course</button>
    </div>
  )
}

export default CourseForm