import { createBrowserRouter } from "react-router-dom"
import AddDoctor from "../Dashboard/AddDoctor";
import MangeDoctors from "../Dashboard/MangeDoctors";
// import Dashboard from "../Dashboard/Dashboard";
import MyAppointment from "../Dashboard/MyAppointment";
import AllUsers from "../Layout/AllUsers";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
           
            {
                path:'/appointment',
                element:<Appoinment/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRoute><DashboardLayout/></PrivetRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment/>
            },
            {
                path:'/dashboard/allUsers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor/></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><MangeDoctors/></AdminRoute>
            },
        ]

    }
])

export default router;