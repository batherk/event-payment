import React, { useContext } from 'react';
import '../styles/PersonalForm.css';
import '../../App.css'
import { EventContext } from '../../contexts'

export default (props)=>{

    const { name, setName, email, setEmail, phone, setPhone, currentStep, setCurrentStep } = useContext(EventContext)

    const getIdentifiers = () => {
      if (currentStep===2){
        return "personal-form process-step current-process-step"
      }else if (currentStep>2){
        return "personal-form process-step completed-process-step"
      }else{
        return "personal-form process-step future-process-step"
      }
    }

  return (
      <div className={getIdentifiers()}>
        <input type="text" placeholder="Name" value={name} autocomplete="name" onChange={e=>{setName(e.target.value)}}/>
        <input type="email" placeholder="Email" value={email} autocomplete="email" onChange={e=>{setEmail(e.target.value)}}/>
        <input type="tel" placeholder="Phone Number" value={phone} autocomplete="tel" onChange={e=>{setPhone(e.target.value)}}/>
        <button value="Next" onClick={(e)=>{setCurrentStep(3)}}>Next</button>
      </div>

  );
}
