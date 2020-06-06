import React, { useEffect, useState} from 'react';
import '../styles/CourseSideBar.css'

export default (props) => {

    const [info, setinfo] = useState([]);

    useEffect(() => {
        setinfo(props.info)
      }, [props.info]);

  return (
    <div className="course__side-bar">
        <div className="course__side-bar__container">
            <h1> Registration for class:</h1>
            <div className="course__side-bar__info"> 
                <h2>{info.name}</h2>
                <h3>Week: {info.week_start} - {info.week_end}</h3>
                <h3>Day: {info.day}s</h3>
                <h3>Time: {info.time_start} - {info.time_end}</h3>
                <h3>Year: {info.year}</h3>
                <h3><a href={info.address} target='_blank'>Address</a></h3>
                <p>{info.description}</p>
            </div>
        </div>
    </div>
  );
}