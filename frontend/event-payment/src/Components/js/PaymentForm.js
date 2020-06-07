import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

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
  return (
    <Elements stripe={stripePromise}>
      <div className="card-container">
        <CardElement options={options}/>
      </div>
    </Elements>
  );
};