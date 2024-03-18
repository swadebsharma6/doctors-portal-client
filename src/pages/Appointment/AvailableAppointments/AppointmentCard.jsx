

const AppointmentCard = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card border">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : "Space"} Available</p>
        <div className="card-actions " onClick={()=>document.getElementById('my_modal_3').showModal()}>
          <button 
          disabled={slots.length === 0}
          className="btn btn-primary"
         onClick={()=> setTreatment(option)}>Book Appointment</button>
        </div>
      </div>
    </div>
    );
};

export default AppointmentCard;