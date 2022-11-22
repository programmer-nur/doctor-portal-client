import React from "react";

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
  const { slots,price, name } = appointmentOption;
  return (
    <div className="card shadow-2xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary font-semibold">{name}</h2>
        <p>{slots.length > 0 ? slots[0]: 'Try another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
        <p><small>Price: $ {price}</small></p>
        <div className="card-actions justify-end">
          <label htmlFor="booking-modal"
           className="btn text-white btn-primary"
           onClick={()=>setTreatment(appointmentOption)}
           >Booking Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
