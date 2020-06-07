import React, { useContext } from 'react';
import './../styles/PassList.css'
import { Pass } from '.'
import { CourseContext } from '../../contexts'


export default (props) => {

  const { course, currentStep } = useContext(CourseContext)

  const getIdentifiers = () => {
    if (currentStep===1){
      return "pass-list process-step current-process-step"
    }else{
      return "pass-list process-step completed-process-step"
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

