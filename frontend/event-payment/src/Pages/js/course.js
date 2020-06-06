import React, { useEffect, useState } from 'react';
import './../../App.css';
import { Parallax, PassList } from './../../Components/js'

export default ({match})=>{

      const [course, setCourse] = useState({});
      const text = `Time: ${course.day}s, ${course.time_start}-${course.time_end} <br> Weeks: ${course.week_start}-${course.week_end}, ${course.year}<br> Description: ${course.description} `

      useEffect(() => {
            const url = `http://localhost:8000/courses/${match.params.id}`
            fetch(url)
            .then((res)=>res.json())
            .then((json)=>{
                  setCourse(json);
            });
      },[]);

  return (
      <div className="course-page">
            <PassList passes={course.passes}/>
            <Parallax title={course.name} imageSide="left" imageURL="Talal.jpg" text={text}/> 
      </div>
      
      );
}
