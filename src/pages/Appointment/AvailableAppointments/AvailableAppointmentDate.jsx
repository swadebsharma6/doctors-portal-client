import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Loading from "../../../components/Shared/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentCard from "./AppointmentCard";

const AvailableAppointmentDate = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <p className="text-secondary text-2xl font-bold">
          Available Services on {format(selectedDate, "PP")}{" "}
        </p>
        <h5 className="text-xl font-semibold">Please select a service.</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointmentOptions.map((option) => (
          <AppointmentCard
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointmentDate;
