import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout');
            })
            .catch((error) => console.error(error));
    }


    return (
        // <header className="text-gray-600 body-font bg-primary fixed top-0 left-0 right-0">
        <header className="text-gray-600 body-font bg-primary">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Moons-Law" className="h-10" />
                    <span className="ml-3 text-2xl text-accent font-bold">Moons Law</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/home" className="text-white mr-5 hover:text-gray-900">Home</NavLink>
                    <NavLink to="/services" className="text-white mr-5 hover:text-gray-900">Services</NavLink>
                    <NavLink to="/blog" className="text-white mr-5 hover:text-gray-900">Blog</NavLink>
                
                {
                    user?.uid ?
                        <>
                            <NavLink to='/reviews' className="text-white mr-5 hover:text-gray-900">My Reviews</NavLink>
                            <NavLink to="/add-services" className="text-white mr-5 hover:text-gray-900">Add Service</NavLink>
                            
                            <button onClick={handleLogout} className="inline-flex items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base-300 mt-4 md:mt-0">Log Out</button>
                        </>
                        :
                        <Link to="/login" className="inline-flex items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base-300 mt-4 md:mt-0">Log In</Link>
                }
                </nav>
            </div>
        </header>
    )
}

export default Header