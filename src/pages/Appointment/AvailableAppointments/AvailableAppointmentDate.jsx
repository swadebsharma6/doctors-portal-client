import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

const AvailableAppointmentDate = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(()=>{
        fetch('/public/appointmentOption.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <p className="text-secondary text-2xl font-bold">
          Available Services on {format(selectedDate, "PP")}{" "}
        </p>
        <h5 className="text-xl font-semibold">Please select a service.</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
       appointmentOptions.map(option => <AppointmentCard
           key={option._id}
           option={option}
          
           ></AppointmentCard>)
      } 
   </div>

    </section>
  );
};

export default AvailableAppointmentDate;
