import React, { useContext } from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
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



export default () => {

  const [currentStep, setCurrentStep] = useContext(CourseContext).step

  const getIdentifiers = () => {
    if (currentStep===3){
      return "payment-form current-step"
    }else if (currentStep>3){
      return "payment-form completed-step"
    }else{
      return "payment-form future-step"
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <div className={getIdentifiers()}>
        <div className="stripe-container">
          <CardElement options={options}/>
        </div>
        <button className="payment-button">Pay</button>
      </div>
    </Elements>
  );
};