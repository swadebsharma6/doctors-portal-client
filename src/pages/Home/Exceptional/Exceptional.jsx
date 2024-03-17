
import treatMent from '../../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div className="hero w-full py-5 mb-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 w-full ml-6">
            <h1 className="lg:text-5xl md:text-4xl  text-2xl font-bold">
            Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
          <img
            src={treatMent}
            alt="chair"
            className="rounded-lg shadow-2xl lg:w-1/2 w-full"
          />
          
        </div>
      </div>
    );
};

export default Exceptional;