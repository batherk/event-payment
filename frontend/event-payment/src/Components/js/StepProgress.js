import React , { useContext } from 'react';
import './../styles/StepProgress.css'
import { CurrentStepContext } from '../../contexts'


export default (props) => {

    const {currentStep, setCurrentStep} = useContext(CurrentStepContext)

    const stepIdentifier = (index)=> {
        if(currentStep===index+1){
            return "step step-current"
        }else if(currentStep>index+1){
            return "step step-done"
        }else{
            return "step step-remaining"
        }
    }

    const wantToSetCurrentStep = (index) =>{
        if (index+1<currentStep){
            setCurrentStep(index+1)
        }
    }

  return (
    <div className="step-progress">
        {props.steps.map((step,index)=>{
            return (
                <div className={stepIdentifier(index)} onClick={(e)=>{wantToSetCurrentStep(index)}}>
                    <div className="step-number">
                    <h3>{index+1}</h3>
                    </div>
                    <p>{step}</p>
                </div>
                
        )})}
    </div>
  );
}

