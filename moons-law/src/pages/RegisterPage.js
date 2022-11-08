import React from 'react'
import { Link } from 'react-router-dom'
import QuickLogin from '../components/common/QuickLogin'

const Register = () => {


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">To See the Latest Review Please Register</h1>
                    
                </div> */}
                <QuickLogin/>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-accent text-2xl font-bold title-font mb-5">Register</h2>
                    <from>
                    <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-gray-600">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="photoUrl" className="leading-7 text-gray-600">Photo Url</label>
                            <input type="text" id="photoUrl" name="photoUrl" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Register</button>
                    </from>
                    <p className="text-sm text-gray-500 mt-3">Already have an account, Please <Link to="/login" className='text-accent'>Login</Link></p>

                </div>
            </div>
        </section>
    )
}

export default Register