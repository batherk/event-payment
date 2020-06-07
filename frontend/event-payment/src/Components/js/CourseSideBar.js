import React, { useContext } from 'react';
import '../styles/CourseSideBar.css'
import { CourseContext } from '../../contexts'

export default (props) => {

    const { course, pass, currentStep } = useContext(CourseContext);
    

  return (
    <div className="course__side-bar">
        <div className="course__side-bar__container">
            <h1> Registration for class:</h1>
            <div className="course__side-bar__info"> 
                <h2>{course.name}</h2>
                {pass && currentStep!==1?<h3 className="pass-info">Pass: {pass.role}</h3>:null}
                {pass && currentStep!==1?<h3 className="pass-info">Price: {pass.price} EUR</h3>:null}
                <h3>Week: {course.week_start} - {course.week_end}</h3>
                <h3>Day: {course.day}s</h3>
                <h3>Time: {course.time_start} - {course.time_end}</h3>
                <h3>Year: {course.year}</h3>
                <h3><a href={course.address} target='_blank' rel="noopener noreferrer">Address</a></h3>
                <p>{course.description}</p>
            </div>
        </div>
    </div>
  );
}