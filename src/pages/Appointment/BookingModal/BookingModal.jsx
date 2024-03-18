import { format } from "date-fns";


const BookingModal = ({treatment,setTreatment, selectedDate}) => {

    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const slot =  form.slot.value;
        const phone = form.phone.value;

        const booking ={
            selectedDate: date,
            treatment: treatment.name,
            name, 
            email,
            slot,
            phone
        };
        console.log(booking);

        setTreatment(null);

        // fetch('http://localhost:5000/bookings',{
        //   method: 'POST',
        //   headers:{
        //     'content-type': 'application/json'
        //   },
        //   body:JSON.stringify(booking)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //   if(data.acknowledged){
        //     setTreatment(null);
        //     toast.success('Successfully Booking Confirmed!');
        //     refetch();
        //   }
        //   else{
        //     toast.error(data.message)
        //   }
         
        // })


        // console.log(booking);
        // setTreatment(null);
    }

    return (
        <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl text-secondary mb-5">{name}</h3>
          <form onSubmit={handleBooking} >
            <input
              type="text"
               value={format(selectedDate, "PP")}
              disabled
              className="input input-bordered mb-2 w-full input-sm"
            />
            <select name="slot" className="select select-bordered w-full select-sm mb-2">
            {
                slots.map(slot=> <option key={slot} value={slot}> {slot} </option>)
             }
             
            </select>
            <input
              type="text"
              name="name"
            
              placeholder="Full Name"
              required
              className="input input-bordered mb-2 w-full input-sm"
            />
            <input
              type="email"
              name="email"
             
              placeholder="Type Email"
              required
              className="input input-bordered mb-2 w-full input-sm"
            />
            <input
              type="text"
              name="phone"
              placeholder="Type Phone"
              className="input input-bordered mb-2 w-full input-sm"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full"
            />
          </form>
        </div>
      </dialog>
    </>
    );
};

export default BookingModal;