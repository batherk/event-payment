import React, { useContext } from 'react';
import '../styles/SideBar.css'
import { EventContext } from '../../contexts'

export default (props) => {

    const { event, pass, currentStep } = useContext(EventContext);
    

  return (
    <div className="course__side-bar">
        <div className="course__side-bar__container">
            <h1> Registration for class:</h1>
            {event?
                <div className="course__side-bar__info"> 
                    <h2>{event.name}</h2>
                    {pass && currentStep!==1?<h3 className="pass-info">Pass: {pass.role}</h3>:null}
                    {pass && currentStep!==1?<h3 className="pass-info">Price: {pass.price} EUR</h3>:null}
                    <h3>Week: {event.week_start} - {event.week_end}</h3>
                    <h3>Day: {event.day}s</h3>
                    <h3>Time: {event.time_start} - {event.time_end}</h3>
                    <h3>Year: {event.year}</h3>
                    <h3><a href={event.address} target='_blank' rel="noopener noreferrer">Address</a></h3>
                    <p>{event.description}</p>
                </div>
                :null}
        </div>
    </div>
  );
}