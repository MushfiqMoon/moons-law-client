import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import ServiceSingle from "../components/ServiceSingle";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import AllServicesPage from "../pages/AllServicesPage";
import Blog from "../pages/Blog";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyReviews from "../pages/MyReviews";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/services",
                element: <AllServicesPage />,
            },

            {
                path: "/services/single",
                element: <ServiceSingle />,
            },
            {
                path: "/add-services",
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: "/my-services",
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },

        ]
    },

]);