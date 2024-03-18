import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

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
        }
      ]
    },
  ]);