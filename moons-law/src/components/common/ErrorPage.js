import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>

      <main className="h-screen w-full flex flex-col justify-center items-center bg-accent">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-primary px-2 text-md rounded rotate-12 absolute text-white">
          Page Not Found
        </div>

        <div className="mt-8 relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <Link to="/" className="btn btn-primary text-accent">Go Back</Link>
        </div>
      </main>
    </>
  )
}

export default ErrorPage