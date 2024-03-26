import { useContext } from "react";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import logo from "../../../assets/icons/Doctor-logo.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser().then(() => {
      toast.success('LogOut Successfully!')

    });
  };

  const navMenu = 
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appointment"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/review"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
      </li>
  {user &&    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        DashBoard
      </NavLink>
    </li>}
    </>
  ;

  return (
    <div className="navbar bg-base-100 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className=" text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-24 h-14" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navMenu}</ul>
      </div>
      <div className="navbar-end">
      {user && <p className="text-xl font-bold text-secondary">{user.displayName}</p>}
        <div className="btn btn-ghost btn-circle avatar ml-10 mr-3">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
       
         { user ? <button
            onClick={handleLogOut}
            className="btn btn-sm btn-primary bg-gradient-to-r from-primary to-secondary px-4"
          >
          <IoMdLogOut className="text-2xl text-white" />
          </button>
       :
          <Link to="/login">
            <button className="btn btn-sm btn-secondary bg-gradient-to-r from-primary to-secondary px-4 text-white">Login Here!</button>
          </Link>}

          <label htmlFor="my-drawer-2" tabIndex={2} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
     
      </div>
    </div>
  );
};

export default Navbar;
