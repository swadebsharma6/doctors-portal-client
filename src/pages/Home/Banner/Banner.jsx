

import bgImage from '../../../assets/images/bg.png';
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero w-full py-5 mb-16" style={{
      background: `url(${bgImage})`,
      backgroundSize: 'cover'
  }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="chair"
          className="rounded-lg shadow-2xl lg:w-1/2 w-full"
        />
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-5xl md:text-4xl  text-2xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
