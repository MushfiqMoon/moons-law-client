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

                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('moonslaw-token', data.token);
                    });

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