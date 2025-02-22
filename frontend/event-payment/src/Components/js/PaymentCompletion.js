import React , { useContext } from 'react';
import { EventContext } from '../../contexts'
import '../styles/PaymentCompletion.css'
import { Parallax } from '.'

export default () => {

    const { currentStep, eventType } = useContext(EventContext);
    const text = `I hope you will enjoy the ${eventType} :) <br/>After a couple of updates you will get a confirmation mail.`

    const getIdentifiers = () => {
        if (currentStep===5){
          return "payment-completion process-step current-process-step"
        }else if (currentStep>5){
          return "payment-completion process-step completed-process-step"
        }else{
          return "payment-completion process-step future-process-step"
        }
      }

    return(
        <div className={getIdentifiers()}>
            <Parallax title="Thank You!" text={text} imageURL="Talal.jpg" imageSide="right"/>
        </div>
    )
};