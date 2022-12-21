import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatementName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handelBooking = (event) => {
    event.preventDefault();
    const from = event.target;
    const slot = from.slot.value;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;

    const booking = {
      appointmentDate: date,
      patient: name,
      patientTreatment: treatementName,
      email,
      slot,
      phone,
      price,
    };
    fetch("https://doctor-portal-server-nurmohammad83.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Successfully");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatementName}</h3>
          <form
            onSubmit={handelBooking}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              disabled
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Enter Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input type="submit" className="btn btn-accent" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
