import React, { useEffect, useState} from 'react';
import { Parallax } from '.'


export default () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/courses/')
        .then((res)=>res.json())
        .then((json)=>{
          setCourses(json);});
      }, []);

  return (
    <div className="classes">
        {courses.map((event,index)=>{
          const text = `Time: ${event.day}s, ${event.time_start}-${event.time_end} <br> Weeks: ${event.week_start}-${event.week_end}, ${event.year}<br> Description: ${event.description} `
          return <Parallax title={event.name} imageSide={index % 2 === 0 ? "left" : "right"} imageURL="Talal.jpg" text={text} link={`/courses/${event.id}`} linkText="Buy pass"/>
        })}
    </div>
  );
}