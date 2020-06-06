import React from 'react';
import './../styles/Pass.css'
import { Image } from '.'
import { Link } from 'react-router-dom'


export default (props) => {

  const imageUrl=()=>{
    if(props.role==='leader'){
      return 'Talal.jpg'
    }else if(props.role==='follower'){
      return 'Follower.jpg'
    }else if(props.role==='couple'){
      return 'Couple.jpg'
    }else{
      return 'Profil.jpg'
    }
  }

  return (
    <div className="pass">
      <Image className="pass__img" url={imageUrl()}/>
        <div className="pass__text">
          <h2 className="pass__role">{props.role}</h2>
          <h2 className="pass__price">{props.price} EUR</h2>
      </div>
    </div>
  );
}

