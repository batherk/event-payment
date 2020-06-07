import React , { useContext } from 'react';
import './../styles/StepProgress.css'
import { CourseContext } from '../../contexts'


export default (props) => {

    const {currentStep, setCurrentStep} = useContext(CourseContext).step;
    const { userFeedBack } = useContext(CourseContext).feedback;

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
        {currentStep <= props.steps.length? props.steps.map((step,index)=>{
            return (
                <div className={stepIdentifier(index)} onClick={(e)=>{wantToSetCurrentStep(index)}}>
                    <div className="step-number">
                    <h3>{index+1}</h3>
                    </div>
                    <p>{step}</p>
                </div>
                )
            })
            :
            <div className={"step step-current"}>
                <div className="step-number">
                    <h3>{currentStep}</h3>
                </div>
                <p>{userFeedBack}</p>
            </div>
        }
    </div>
  );
}

