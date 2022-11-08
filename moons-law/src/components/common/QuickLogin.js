import React, { useContext } from 'react'

import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
// import { AuthContext } from '../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const QuickLogin = () => {

    // dynamic Route Link 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    // Provider
    const googleProvider = new GoogleAuthProvider();

    const { providerLogin } = useContext(AuthContext);

    // Gmail login 
    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {
                toast.success('Login Successful ');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }


    return (
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">Or You Can Sign Up with</h1>
            <button className="badge badge-accent p-4 mt-3 text-white" onClick={() => handleProviderLogin(googleProvider)}><FaGoogle /> <span className='ml-4'>Google</span></button>
        </div>
    )
}

export default QuickLogin