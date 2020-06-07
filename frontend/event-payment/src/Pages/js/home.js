import React from 'react';
import './../../App.css';
import { Parallax } from './../../Components/js'

export default ()=>{

        const title = 'Salsa events and courses'
        const imageURL= 'Couple.jpg'
        const text= "This is a website for finding dance classes and events you want to join!<br>It is here you register and buy passes as well."
        const imageSide = "left"

  return (
        <Parallax imageSide={imageSide} title={title} text={text} imageURL={imageURL}/>
  );
}
