import React, { useEffect, useState } from 'react';
import '../css/event.css';
import { EventSideBar, PassList, StepProgress, PersonalForm, PaymentForm, PaymentCompletion } from './../../Components/js'
import {EventContext} from '../../contexts'

export default ({match})=>{

      const [event, setEvent] = useState(null);
      const [eventType, setEventType] = useState("event");
      const [pass, setPass] = useState(null);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [currentStep,setCurrentStep] = useState(1)
      const [token,setToken] = useState(null)
      const [userFeedBack,setUserFeedBack] = useState("")

      const context = {currentStep, setCurrentStep, event, setEvent,
            pass, setPass, name, setName, email, setEmail, phone, setPhone, token,setToken, 
            userFeedBack, setUserFeedBack, eventType, setEventType
      }

      

      const getSteps = () => {
            if (currentStep===1){
                  return ['Choose pass', 'Submit personal info','Pay']
            }else if(currentStep===2){
                  return ['Chosen pass', 'Submit personal info','Pay']
            }else if(currentStep===3){
                  return ['Chosen pass', 'Submitted personal info','Pay']
            }else{
                  return ['Choose pass', 'Submit personal info','Pay']
            }
            
      }

      useEffect(()=>{
            if (userFeedBack==="Payment Complete"){
                  console.log("Woho")
            }
      }, [userFeedBack])

      useEffect(()=>{
            if(token!==null){
                  setUserFeedBack("Contacting the server with morse code")
                  const url = `http://localhost:8000/coursepayments/`

                  fetch(url, {
                        method: 'POST',
                        headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              pass_type: pass.id,
                              buyer_name: name,
                              buyer_email: email,
                              buyer_phone: phone,
                        })
                  })
                  .then((response)=>{return response.json()})
                  .then((json)=>{setUserFeedBack(json.detail);setCurrentStep(5)})
            }
      },[token])


      useEffect(() => {
            const url = `http://localhost:8000/events/${match.params.id}`
            fetch(url)
            .then((res)=>res.json())
            .then((json)=>{
                  setEvent(json);
            });
      },[]);

  return (
      <div className="event-page">
            <EventContext.Provider value={context}>
                  <EventSideBar/>
                  <div className="payment-process">
                        <StepProgress steps={getSteps()}/>
                        <div className="steps-container">
                              <PassList/>
                              <PersonalForm/>
                              <PaymentForm/>
                              <PaymentCompletion/>
                        </div>
                  </div>
            </EventContext.Provider>
      </div>
      
      );
}
