import React from 'react';
import './../../App.css';
import { Parallax } from '../../Components/js'

export default ()=>{

        const title = 'Event list'
        const imageURL= 'Profil.jpg'
        const text= ""
        const imageSide = "left"

  return (
        <Parallax imageSide={imageSide} title={title} text={text} imageURL={imageURL}/>
  );
}
