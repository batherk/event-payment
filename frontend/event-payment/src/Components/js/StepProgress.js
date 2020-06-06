import React from 'react';
import './../styles/StepProgress.css'


export default (props) => {

    const stepIdentifier = (index)=> {
        if(props.current===index+1){
            return "step step-current"
        }else if(props.current>index+1){
            return "step step-done"
        }else{
            return "step step-remaining"
        }
    }

    const setCurrentStep = (index) =>{
        if (index+1<props.current){
            props.setCurrentStep(index+1)
        }
    }

  return (
    <div className="step-progress">
        {props.steps.map((step,index)=>{
            return (
                <div className={stepIdentifier(index)} onClick={(e)=>{setCurrentStep(index)}}>
                    <div className="step-number">
                    <h3>{index+1}</h3>
                    </div>
                    <p>{step}</p>
                </div>
                
        )})}
    </div>
  );
}

