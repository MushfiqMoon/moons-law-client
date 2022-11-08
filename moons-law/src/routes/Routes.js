import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import ServiceSingle from "../components/ServiceSingle";
import Main from "../layout/Main";
import AllServicesPage from "../pages/AllServicesPage";
import Blog from "../pages/Blog";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";



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
                path: "/services",
                element: <AllServicesPage />,
            },
            {
                path: "/services/single",
                element: <ServiceSingle />,
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },

        ]
    },

]);