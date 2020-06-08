import React, { useContext } from 'react';
import './../styles/PassList.css'
import { Pass } from '.'
import { EventContext } from '../../contexts'
import { Parallax } from '.';


export default (props) => {

  const { event, currentStep, eventType } = useContext(EventContext)

  const getIdentifiers = () => {
    if (currentStep===1){
      return "pass-list process-step current-process-step"
    }else{
      return "pass-list process-step completed-process-step"
    }
  }

  const soldOutElement = () => {
    if(eventType==="classes"){
      return <Parallax title="Sorry!" text={"There are unfortunately not any available spots left to these classes.<br/>Check out one of the others :)"} 
      imageURL="Talal.jpg" imageSide="right" link="/courses" linkText="More classes"/>
    }else{
      return <Parallax title="Sorry!" text={"There are unfortunately not any available spots left to the event.<br/>Check out one of the others :)"} 
      imageURL="Talal.jpg" imageSide="right" link="/events" linkText="More events"/>
    }
  }

  return (
    <div className={getIdentifiers()}>
      {!event?null:(
        event.passes_left.length!==0?
          event.passes_left.map((pass,index)=>{
            return <Pass pass={pass}/>
        }):
        soldOutElement()
      )}
    </div>
  );
}

