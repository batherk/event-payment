import React, { useEffect, useState, createContext } from 'react';
import '../css/course.css';
import { CourseSideBar, PassList, StepProgress, PersonalInfo } from './../../Components/js'
import {CourseContext} from '../../contexts'

export default ({match})=>{

      const [course, setCourse] = useState({});
      const [pass, setPass] = useState(null);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [currentStep,setCurrentStep] = useState(1)

      const states = {
            'step':[currentStep, setCurrentStep], 
            'course':[course, setCourse],
            'pass':[pass, setPass],
            'name':[name, setName],
            'email':[email, setEmail],
            'phone':[phone, setPhone]
      }

      const getSteps = () => {
            if (currentStep===1){
                  return ['Choose pass', 'Submit personal info','Pay']
            }else if(currentStep===2){
                  return [`Chosen pass: ${pass.role}`, 'Submit personal info','Pay']
            }
            
      }


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
            <CourseContext.Provider value={states}>
                  <CourseSideBar info={course}/>
                  <div className="payment-process">
                        
                              <StepProgress steps={getSteps()}/>
                        
                        {currentStep===1?<PassList passes={course.passes}/>:null}
                        {currentStep===2?<PersonalInfo/>:null}
                  </div>
            </CourseContext.Provider>
      </div>
      
      );
}
