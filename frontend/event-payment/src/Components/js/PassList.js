import React, { useContext } from 'react';
import './../styles/PassList.css'
import { Pass } from '.'
import { CourseContext } from '../../contexts'


export default (props) => {

  const [course, setCourse] = useContext(CourseContext).course
  const [currentStep, setCurrentStep] = useContext(CourseContext).step

  const getIdentifiers = () => {
    if (currentStep===1){
      return "pass-list current-step"
    }else{
      return "pass-list completed-step"
    }
  }

  return (
    <div className={getIdentifiers()}>
      {course.passes? course.passes.map((pass,index)=>{
      return <Pass pass={pass}/>
    }):null}
    </div>
  );
}

