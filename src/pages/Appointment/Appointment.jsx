import { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointmentDate from "./AvailableAppointments/AvailableAppointmentDate";


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <>
         <AppointmentBanner 
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
         ></AppointmentBanner>
         <AvailableAppointmentDate
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
         ></AvailableAppointmentDate>
        </>
    );
};

export default Appointment;