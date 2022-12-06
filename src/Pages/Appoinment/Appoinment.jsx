import React, { useState } from "react";
import AppointmentBaner from "./AppointmentBaner";
import AvialbleAppointment from "./AvialbleAppointment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointmentBaner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvialbleAppointment selectedDate={selectedDate} />
    </div>
  );
};

export default Appoinment;
