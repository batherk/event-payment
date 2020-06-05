import React from 'react';
import './../styles/Parallax.css'
import Image from './Image.js'
import TextBox from './Textbox.js'



export default (props) => {
    const imageSide = props.imageSide || "left";
    const textbox = <TextBox title={props.title} text={props.text}/>;
    return (
    <div className="parallax" image-side={imageSide}>
        <Image url={props.imageURL}/>
        {props.title ? textbox : null}
    </div>
    
  );
}

