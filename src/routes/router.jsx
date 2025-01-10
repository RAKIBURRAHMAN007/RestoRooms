import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import Rooms from "../components/Rooms/Rooms";
import MyBookings from "../components/MyBookings/MyBookings";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import RoomDetails from "../components/RoomDetails/RoomDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUsPage/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <PrivateRouter><Rooms></Rooms></PrivateRouter>,
                loader: ()=> fetch('https://resto-rooms-server.vercel.app/rooms')
            },
            {
                path: '/mybookings',
                element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params})=> fetch(`https://resto-rooms-server.vercel.app/rooms/${params.id}`)
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);

export default router;