import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='mb-20 py-6 rounded-md'
        style={{background: `url(${appointment})`}}
        >
        <div className='text-center'>
        <h2 className='text-2xl font-bold text-secondary'>Contact US</h2>
        <h2 className='text-4xl text-white'>Stay connected with us</h2>
        </div>
        <div className="w-1/2 mx-auto text-white">
        <div>
        <form className="card-body">
        <div className="form-control">
          <input type="email" placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <textarea className="textarea textarea-bordered h-32" placeholder="Bio"></textarea>
        </div>
        <div className="mt-6 text-center">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Submit</button>
        </div>
      </form>
        </div>
      </div>
        </section>
    );
};

export default ContactUs;