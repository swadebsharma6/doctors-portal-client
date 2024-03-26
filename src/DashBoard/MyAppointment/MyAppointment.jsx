import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    const {data:bookings = [],}= useQuery({ 
        queryKey: ['bookings', user.email],
        queryFn: async() =>{
            const res = await fetch(url, {
              headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
       
     });
     console.log(bookings)


    return (
        <section>
        <h3 className="text-2xl font-bold text-secondary mb-5">My Appointment</h3>
        <div className="overflow-x-auto">
        <table className="table border-2 border-secondary p-4">
          {/* head */}
          <thead className="bg-secondary text-white">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {
            bookings.map((booking, idx) =>   <tr key={idx}>
                <th>{idx + 1}</th>
                <td className="uppercase">{booking.patient}</td>
                <td className="uppercase">{booking.treatment}</td>
                <td>{booking.selectedDate}</td>
                <td>{booking.slot}</td>
              </tr>)
          }
          
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default MyAppointment;