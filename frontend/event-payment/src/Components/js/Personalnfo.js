import React, { useContext } from 'react';
import '../styles/PersonalInfo.css';
import { CourseContext } from '../../contexts'

export default (props)=>{

    const [name, setName] = useContext(CourseContext).name
    const [email, setEmail] = useContext(CourseContext).email
    const [phone, setPhone] = useContext(CourseContext).phone
    const [currentStep, setCurrentStep] = useContext(CourseContext).step

  return (
      <div className="personal-info">
        <input type="text" placeholder="Name" value={name} autocomplete="name" onChange={e=>{setName(e.target.value)}}/>
        <input type="email" placeholder="Email" value={email} autocomplete="email" onChange={e=>{setEmail(e.target.value)}}/>
        <input type="tel" placeholder="Phone Number" value={phone} autocomplete="tel" onChange={e=>{setPhone(e.target.value)}}/>
        <button value="Next" onClick={(e)=>{setCurrentStep(3)}}>Next</button>
      </div>

  );
}
