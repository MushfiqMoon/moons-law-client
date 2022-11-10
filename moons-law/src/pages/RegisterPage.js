import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuickLogin from '../components/common/QuickLogin'
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
    // Dynami Title
    useTitle('Register')
    // dynamic Route Link 
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const { providerLogin, createUser, updateUserInfo } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('first', name, photoURL, email, password)


        // REGISTER 
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                toast.success('Login Successful');
                navigate(from, { replace: true });
                handleUpdateUserProfile(name, photoURL);

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    // USER PROFILE UPDATE 
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserInfo(profile)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">To See the Latest Review Please Register</h1>
                    
                </div> */}
                <QuickLogin />
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-accent text-2xl font-bold title-font mb-5">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-gray-600">Full Name</label>
                            <input required type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="photoUrl" className="leading-7 text-gray-600">Photo Url</label>
                            <input type="text" id="photoUrl" name="photoUrl" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                            <input required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-gray-600">Password</label>
                            <input required type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Register</button>
                    </form>
                    <p className="text-sm text-gray-500 mt-3">Already have an account, Please <Link to="/login" className='text-accent'>Login</Link></p>

                </div>
            </div>
        </section>
    )
}

export default Register