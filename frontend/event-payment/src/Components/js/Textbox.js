import React from 'react';
import './../styles/Textbox.css'
import { Link } from 'react-router-dom'


export default (props)=>{
  return(
    <div className="text-box">
        <h2 className="text-box__header">{props.title}</h2>
        <div className="text-box__text"dangerouslySetInnerHTML={{__html:props.text}}></div> 
        <Link to={props.link}>{props.linkText}</Link>
    </div>
    
  );

}