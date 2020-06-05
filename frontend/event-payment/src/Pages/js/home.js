import React from 'react';
import './../../App.css';
import { Parallax } from './../../Components/js'

export default ()=>{

        const title = 'Salsa events and courses'
        const imageURL= 'Profil.jpg'
        const text= "This is a website for finding possible dance events and courses."
        const imageSide = "left"

  return (
        <Parallax imageSide={imageSide} title={title} text={text} imageURL={imageURL}/>
  );
}
