import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const booking = useLoaderData();
  const { appointmentDate, patientTreatment, price, slot } = booking;
  return (
    <div>
      <h2 className="text-3xl">Payment for {patientTreatment}</h2>
      <p>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        <strong>{appointmentDate}</strong> at {slot}
      </p>
      <div className="my-12 w-96">
        <Elements stripe={stripePromise}>
          <CheckOutFrom 
          booking={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
