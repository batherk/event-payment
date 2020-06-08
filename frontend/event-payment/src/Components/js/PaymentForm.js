import React, { useContext, useState } from 'react';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/PaymentForm.css'
import '../../App.css'
import { EventContext } from '../../contexts'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TagT9jGDj7CN9NOQfTnueTxz');

const options = {style: {
  base: {
    fontSize: '16px',
    color: '#ffffff',
    '::placeholder': {
      color: '#d7d7d7',
    },
  },
  invalid: {
    color: '#ffffff',
    iconColor: '#e2201a',
  },
},}

const Form = () => {

  const { currentStep, setCurrentStep, setToken, setUserFeedBack } = useContext(EventContext);
  
  const [validInput, setValidInput] = useState(false);
  const [inputError, setInputError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const getProcessIdentifiers = () => {
    if (currentStep===3){
      return "payment-form process-step current-process-step"
    }else if (currentStep>3){
      return "payment-form process-step completed-process-step"
    }else{
      return "payment-form process-step future-process-step"
    }
  }

  const getContainerIdentifiers = () => {
    if(validInput){
      return "stripe-container card-valid"
    }else if (inputError){
      return "stripe-container card-error"
    }else{
      return "stripe-container"
    }
  }

  const getToken = async (event) => {
    setCurrentStep(4)
    setUserFeedBack("Using smoke signals to communicate with Stripe")

    const { token, error } = await stripe.createToken(elements.getElement(CardElement))
    if (error){
      setUserFeedBack('Payment aborted. There was an error with the payment card')
    }else{
      setToken(token.id)
    }
  }


  return (
    <div className={getProcessIdentifiers()}>
      <div className={getContainerIdentifiers()}>
        <CardElement options={options} onChange={(e)=>{setValidInput(e.complete);setInputError(e.error)}}/>
      </div>
      <button className="payment-button" disabled={!stripe || !validInput} onClick={getToken}>Pay</button>
    </div>
  );
};


export default () => {

  return (
    <Elements stripe={stripePromise}>
      <Form/>
    </Elements>
  );
};