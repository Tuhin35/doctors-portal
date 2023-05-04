import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    // console.log('booking' , booking)
    const {appointmentDate,treatment,slot,patientName,Price} = booking;
    return (
        <div>
            <h2 className="text-3xl">Payment For {treatment}</h2>
            <h2 className="text-2xl">Patient name:{patientName}</h2>
            <p className='text-xl'>your visit fee is {Price} </p>
            <h2 className="text-xl">Date : {appointmentDate} and your slot is {slot}</h2>
        <div className='w-96 my-6'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                booking={booking}
                ></CheckoutForm>
            </Elements>
        </div>
        </div>
    );
};

export default Payment;