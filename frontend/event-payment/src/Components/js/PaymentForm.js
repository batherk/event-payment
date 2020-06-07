import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TagT9jGDj7CN9NOQfTnueTxz');

export default () => {
  return (
    <Elements stripe={stripePromise}>
      <CardElement/>
    </Elements>
  );
};