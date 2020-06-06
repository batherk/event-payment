import React, { useEffect, useState } from 'react';
import '../css/course.css';
import { CourseSideBar, PassList, StepProgress } from './../../Components/js'

export default ({match})=>{

      const [course, setCourse] = useState({});
      const [currentStep,setCurrentStep] = useState(1)
      const steps = ['Choose pass', 'Submit personal info','Pay']


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
            <CourseSideBar info={course}/>
            <div className="payment-process">
                  <StepProgress steps={steps} current={currentStep}/>
                  <PassList passes={course.passes}/>
            </div>
            
      </div>
      
      );
}
