import React from 'react';
import './../../App.css';
import { Parallax, CourseList } from '../../Components/js'

export default ()=>{

        const title = 'Course list'
        const imageURL= 'Profil.jpg'
        const text= ""
        const imageSide = "left"

  return (
      <div className='course-page'>
            <Parallax imageSide={imageSide} title={title} text={text} imageURL={imageURL}/>
            <CourseList/>
      </div>
      
  );
}
