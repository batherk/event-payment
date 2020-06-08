import React, { useContext } from 'react';
import './../styles/Pass.css'
import { Image } from '.'
import { EventContext } from '../../contexts'


export default (props) => {

  const { setPass, setCurrentStep} = useContext(EventContext)

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

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="pass" onClick={(e)=>{setPass(props.pass);setCurrentStep(2)}}>
      <Image url={imageUrl()}/>
      <div className="pass__text">
        {props.pass.name?<h2 className="pass__name">{capitalizeFirst(props.pass.name)}</h2>:null}
        <h2 className="pass__role">{capitalizeFirst(props.pass.role)}</h2>
        <h2 className="pass__price">{props.pass.price} EUR</h2>
      </div>
    </div>
  );
}

