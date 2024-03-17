import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className='mb-20 rounded-lg'
        style={{background: `url(${appointment})`}}
        >
        <div className="hero text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="lg:-mt-40 lg:w-1/2 hidden lg:block rounded-lg" />
          <div className='ms-10'>
          <h4 className='text-xl font-bold text-secondary'>Appointment</h4>
            <h1 className="lg:text-5xl md:text-3xl font-bold my-3">Make an appointment Today</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-secondary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
        </section>
    );
};

export default MakeAppointment;