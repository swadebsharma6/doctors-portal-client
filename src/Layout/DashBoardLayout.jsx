import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../pages/Shared/Navbar/Navbar";


const DashBoardLayout = () => {

  const {user}= useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email)

    return (
        <div>
             <div className="mb-10">
             <Navbar/>
             </div>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pt-10">
              <Outlet/>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
              <ul className="menu sm:pt-10 w-80 min-h-full bg-base-200 text-base-content">
           
                <li><Link to='/dashboard' className="text-xl font-bold">My Appointment</Link></li>
                {
                  isAdmin && <li><Link to='/dashboard/all-users' className="text-xl font-bold">All Users</Link></li>
                }
              </ul>
            
            </div>
          </div>
        </div>
    );
};

export default DashBoardLayout;