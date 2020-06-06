import React, { useEffect, useState} from 'react';
import { Parallax } from '.'


export default () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/courses/')
        .then((res)=>res.json())
        .then((json)=>{
          console.log(json)
          setCourses(json);});
      }, []);

  return (
    <div className="pass-type">
        {courses.map((course,index)=>{
          const text = `Time: ${course.day}s, ${course.time_start}-${course.time_end} <br> Weeks: ${course.week_start}-${course.week_end}, ${course.year}<br> Description: ${course.description} `
          return <Parallax title={course.name} imageSide={index % 2 === 0 ? "left" : "right"} imageURL="Talal.jpg" text={text} link={`/courses/${course.id}`} linkText="Read more and buy pass"/>
        })}
    </div>
  );
}