import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-primary">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Moons-Law" className="h-10" />
                    <span className="ml-3 text-2xl text-accent">Moons Law</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/all-services" className="mr-5 hover:text-gray-900">Services</NavLink>
                    <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                </nav>
                <Link to="/login" className="inline-flex items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base-300 mt-4 md:mt-0">Log In</Link>
            </div>
        </header>
    )
}

export default Header