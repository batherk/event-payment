import React, { useContext, useState } from 'react';
import {Elements, CardElement, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/PaymentForm.css'
import '../../App.css'
import { CourseContext } from '../../contexts'


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
    color: '#9e2146',
    iconColor: '#ffc7ee',
  },
},}

const Form = () => {

  const [currentStep, setCurrentStep] = useContext(CourseContext).step;
  const [validInput, setValidInput] = useState(false)
  const stripe = useStripe();

  const getIdentifiers = () => {
    if (currentStep===3){
      return "payment-form process-step current-process-step"
    }else if (currentStep>3){
      return "payment-form process-step completed-process-step"
    }else{
      return "payment-form process-step future-process-step"
    }
  }

  return (
    <div className={getIdentifiers()}>
      <div className={validInput?"stripe-container valid":"stripe-container"}>
        <CardElement options={options} onChange={(e)=>{setValidInput(e.complete)}}/>
      </div>
      <button className="payment-button" disabled={!stripe || !validInput}>Pay</button>
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