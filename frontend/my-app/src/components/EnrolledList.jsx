import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const EnrolledList = ({students}) => {

    

  return (
    <div>
        <h2>Student Enrollments</h2>
        {Array.isArray(students) && students.map((student)=>(
            <div key={student.id} style={{marginBottom:"1rem"}}>
                <strong>{student.name}</strong> ({student.email})
                <ul>
                    {(student.Courses || []).map((course)=>(
                        <li key={course.id}>{course.name} - {course.instructor}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default EnrolledList