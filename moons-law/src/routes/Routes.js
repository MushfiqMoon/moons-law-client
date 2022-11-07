import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import Main from "../layout/Main";
import AllServicesPage from "../pages/AllServicesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";



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
                path: "/all-services",
                element: <AllServicesPage />,
            },
            {
                path: "/login",
                element: <LoginPage/>
            }

        ]
    },

]);