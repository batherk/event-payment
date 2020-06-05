import React from 'react';
import './../styles/Image.css'


export default (props) => {
  return (
    <div className="image">
        <img src={'/img/' + props.url} alt=""/>
    </div>
  );
}

