import React, { useEffect, useState } from 'react';
import '../css/event.css';
import { CourseSideBar, PassList, StepProgress, PersonalForm, PaymentForm, PaymentCompletion } from './../../Components/js'
import {EventContext} from '../../contexts'

export default ({match})=>{

      const [event, setEvent] = useState(null);
      const [eventType, setEventType] = useState("classes");
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
                  .then((response)=>{
                        if (response.status === 400) {
                              response.json().then((data)=> {
                                    setUserFeedBack(data.detail)
                              })
                        }
                        
                        else if (response.status === 200) {
                              response.json().then((data)=> {
                                    setUserFeedBack(data.detail)
                                    setCurrentStep(5)
                              })
                        }
                  })
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
      },[token])


      useEffect(() => {
            const url = `http://localhost:8000/courses/${match.params.id}`
            fetch(url)
            .then((res)=>res.json())
            .then((json)=>{
                  setEvent(json);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

  return (
      <div className="course-page">
            <EventContext.Provider value={context}>
                  <CourseSideBar/>
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
