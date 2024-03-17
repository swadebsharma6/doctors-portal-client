import { Link } from "react-router-dom";
import footier from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer className=" shadow-xl p-10" style={{
        background: `url(${footier})`,
        backgroundSize: 'cover'
}}>
    <div className="footer">
    <nav>
      <h6 className="footer-title text-xl">Services</h6>
      <Link className="link link-hover">Emergency Checkup</Link>
      <Link className="link link-hover">Monthly Checkup</Link>
      <Link className="link link-hover">Weekly Checkup</Link>
      <Link className="link link-hover">Deep Checkup</Link>
    </nav>
    <nav>
      <h6 className="footer-title">ORAL HEALTH</h6>
      <Link className="link link-hover">Fluoride Treatment</Link>
      <Link className="link link-hover">Cavity Filling</Link>
      <Link className="link link-hover">Teth Whitening</Link>
    </nav>
    <nav>
      <h6 className="footer-title">OUR ADDRESS</h6>
      <Link className="link link-hover">New York - 101010 Hudson</Link>
      <Link className="link link-hover">Terms of use</Link>
     
    </nav>
  </div>
  <div className="text-center my-8 py-5">
    <p className="text-lg">Copyright © 2024 - All right reserved by doctorPortal</p>
  </div>
    </footer>
  );
};

export default Footer;
