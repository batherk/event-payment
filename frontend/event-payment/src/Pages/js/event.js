import React from 'react';
import './../../App.css';
import { Parallax } from '../../Components/js'

export default ()=>{

        const title = 'Bjørn Are Therkelsen'
        const imageURL= 'Profil.jpg'
        const text= "Jeg er student ved NTNU og går tredjeåret på linjen for Datateknologi med spesialisering innen kunstig intelligens. På fritiden er jeg salsadanser og -instruktør.<br><br> Her er min <a href='/docs/Bjørn_Are_Therkelsen_CV.pdf' target='_blank' >CV</a>."
        const imageSide = "left"

  return (
        <Parallax imageSide={imageSide} title={title} text={text} imageURL={imageURL}/>
  );
}
