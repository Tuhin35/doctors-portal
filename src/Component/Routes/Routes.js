import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import Reviews from "../Pages/otherPage/Reviews";
import About from "../Pages/otherPage/About";
import Appointment from "../Pages/otherPage/Appointment/Appointment";
import PrivateRoutes from "../PrivateRoutes.js/PrivateRoutes";
// import DashBoard from '../Pages/DashBoard/DashBoard'
import DashBoardLayOut from "../Layout/DashBoardLayout/DashBoardLayOut";
import MyAppointment from "../Pages/DashBoard/MyAppointment";
import Users from "../Pages/DashBoard/Users";
import AdminRoutes from "../PrivateRoutes.js/AdminRoutes";
import AddDoctors from "../Pages/DashBoard/AddDoctors";
import ManageDoctor from "../Pages/DashBoard/ManageDoctor";
import Payment from "../Pages/DashBoard/Payment/Payment";

const router = createBrowserRouter([


    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: '/review',
                element: <Reviews></Reviews>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            }
        ],

    },
    {
        path: "/dashboard",
        element: <DashBoardLayOut></DashBoardLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: "/dashboard/dashboard",
                    element: <PrivateRoutes><MyAppointment></MyAppointment>
                    </PrivateRoutes>
                },
                {
                    path: "/dashboard",
                    element: <PrivateRoutes><MyAppointment></MyAppointment>
                    </PrivateRoutes>
                },
                {
                    path: "/dashboard/users",
                    element: <AdminRoutes><Users></Users></AdminRoutes>
                },
                {
                    path: "/dashboard/addDoctors",
                    element: <AdminRoutes><AddDoctors></AddDoctors></AdminRoutes>
                }
                ,
                {
                    path: "/dashboard/manageDoctors",
                    element: <AdminRoutes><ManageDoctor></ManageDoctor></AdminRoutes>
                }
                ,
                {
                    path: "/dashboard/payment/:id",
                    element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                    loader:({params}) => fetch(`https://doctors-portal-server-beta-orpin.vercel.app/bookings/${params.id}`)
                }
            ]
    }




])

export default router