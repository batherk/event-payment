import React from 'react';
import './../styles/Textbox.css'


export default (props)=>{
  return(
    <div class="text-box">
        <h2 class="text-box__header">{props.title}</h2>
        <div class="text-box__text"dangerouslySetInnerHTML={{__html:props.text}}></div> 
    </div>
    
  );

}