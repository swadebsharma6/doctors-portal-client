import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../DashBoard/DashBoard/AllUsers";
import MyAppointment from "../DashBoard/MyAppointment/MyAppointment";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminRoutes from "./AdminRoutes";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/appointment',
          element: <Appointment/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivetRoutes><DashBoardLayout/></PrivetRoutes>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointment/>
        },
        {
          path: '/dashboard/all-users',
          element: <AdminRoutes> <AllUsers/></AdminRoutes>
        },
        
      ]
    }
  ]);