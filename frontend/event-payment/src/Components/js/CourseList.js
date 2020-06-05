import React, { useEffect, useState} from 'react';
import './../styles/PassType.css'
import { Image } from '.'


export default (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/courses/')
        .then((res)=>res.json())
        .then((json)=>{
          setCourses(json);});
      }, []);

  return (
    <div className="pass-type">
        {courses.map((course,index)=>{
          return <p key={course.id}>{course.name}</p>
        })}
    </div>
  );
}