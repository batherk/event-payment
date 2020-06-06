import React, { useContext } from 'react';
import './../styles/PassList.css'
import { Pass } from '.'
import { CourseContext } from '../../contexts'


export default (props) => {

  const [course, setCourse] = useContext(CourseContext).course

  return (
    <div className="pass-list">
      {course.passes? course.passes.map((pass,index)=>{
      return <Pass pass={pass}/>
    }):null}
    </div>
  );
}

