import React, { useEffect, useState, createContext } from 'react';
import '../css/course.css';
import { CourseSideBar, PassList, StepProgress, PersonalForm, PaymentForm } from './../../Components/js'
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
                  return ['Chosen pass', 'Submit personal info','Pay']
            }else if(currentStep===3){
                  return ['Chosen pass', 'Submitted personal info','Pay']
            }else{
                  return ['Choose pass', 'Submit personal info','Pay']
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
                        <div className="steps-container">
                              <PassList passes={course.passes}/>
                              <PersonalForm/>
                              <PaymentForm/>
                        </div>
                  </div>
            </CourseContext.Provider>
      </div>
      
      );
}
