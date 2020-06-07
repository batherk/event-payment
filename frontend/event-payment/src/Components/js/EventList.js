import React, { useEffect, useState} from 'react';
import { Parallax } from '.'


export default () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/events/')
        .then((res)=>res.json())
        .then((json)=>{
          setEvents(json);});
      }, []);

  return (
    <div className="events">
        {events.map((event,index)=>{
          const text = `Start: ${event.date_start}<br>End: ${event.date_end}<br>Description: ${event.description}`
          return <Parallax title={event.name} imageSide={index % 2 === 0 ? "left" : "right"} imageURL="Talal.jpg" text={text} link={`/events/${event.id}`} linkText="Buy pass"/>
        })}
    </div>
  );
}