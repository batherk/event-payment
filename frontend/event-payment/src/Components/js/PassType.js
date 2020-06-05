import React from 'react';
import './../styles/PassType.css'
import { Image } from '.'


export default (props) => {
  return (
    <div className="pass-type">
        <Image className="pass-type__img" url={props.url}/>
        <div className="pass-type__text">
            <h2 className="pass-type__role">{props.role}</h2>
            <h2 className="pass-type__price">{props.price} EUR</h2>
        </div>
        
    </div>
  );
}

