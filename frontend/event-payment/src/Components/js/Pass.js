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

  return (
    <div className="pass" onClick={(e)=>{setPass(props.pass);setCurrentStep(2)}}>
      <div className="image">
        <img src={'/img/' + imageUrl()} alt=""/>
      </div>
      <div className="pass__text">
        {props.pass.name?<h2 className="pass__name">{props.pass.name}</h2>:null}
        <h2 className="pass__role">{props.pass.role}</h2>
        <h2 className="pass__price">{props.pass.price} EUR</h2>
      </div>
    </div>
  );
}

