import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuickLogin from '../components/common/QuickLogin'
import { AuthContext } from '../contexts/AuthProvider'



const LoginPage = () => {

    const { signIn } = useContext(AuthContext);

    // dynamic Route Link 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    // user and password loing 
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
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

                form.reset()
                toast.success('Login Successful ');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    }


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <QuickLogin />
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-accent text-2xl font-bold title-font mb-5">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                            <input required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-gray-600">Password</label>
                            <input required type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Login</button>
                    </form>
                    <p className="text-sm text-gray-500 mt-3">Don't have an account Please <Link to="/register" className='text-accent'>Register</Link></p>

                </div>
            </div>
        </section>
    )
}

export default LoginPage