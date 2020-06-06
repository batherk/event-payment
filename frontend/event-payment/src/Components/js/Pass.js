import React, { useContext } from 'react';
import './../styles/Pass.css'
import { Image } from '.'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../contexts'


export default (props) => {

  const [pass,setPass] = useContext(CourseContext).pass
  const [currentStep, setCurrentStep] = useContext(CourseContext).step

  const imageUrl=()=>{
    if(props.pass.role==='leader'){
      return 'Talal.jpg'
    }else if(props.pass.role==='follower'){
      return 'Follower.jpg'
    }else if(props.pass.role==='couple'){
      return 'Couple.jpg'
    }else{
      return 'Profil.jpg'
    }
  }

  return (
    <div className="pass" onClick={(e)=>{setPass(props.pass);setCurrentStep(2)}}>
      <Image className="pass__img" url={imageUrl()}/>
        <div className="pass__text">
          <h2 className="pass__role">{props.pass.role}</h2>
          <h2 className="pass__price">{props.pass.price} EUR</h2>
      </div>
    </div>
  );
}

