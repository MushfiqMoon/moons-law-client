import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import MyReviewEdit from "../components/MyReviewEdit";
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
                loader: async () => fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services`),
            },
            {
                path: "/home",
                element: <HomePage />,
                loader: async () => fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services`),
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
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/services",
                loader: async () => fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services`),
                element: <AllServicesPage />,
            },

            {
                path: "/services/:id",
                element: <ServiceSingle />,
                loader: async ({ params }) => fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services/${params.id}`),
            },
            {
                path: "/add-services",
                element: <PrivateRoute><AddService /></PrivateRoute>,
            },
            {
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews /></PrivateRoute>,
            },
            {
                path: "/my-reviews/edit/:id",
                element: <PrivateRoute><MyReviewEdit /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/${params.id}`),
            },

        ]
    },

]);