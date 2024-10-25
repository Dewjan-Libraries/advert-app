import React from 'react';

import logo from "../assets/images/image-22.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between p-10 bg-white shadow-lg z-30">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img className="h-20 w-38 object-contain" src={logo} alt="placeholder" />
                </div>

                {/* Search Section */}
                <div className="flex items-center  space-x-2">
                    <ul className='flex justify-between gap-5 font-semibold text-gray-800 text-lg'>
                    <li><a href="#home">HOME</a> </li>
                    <li><a href="#testimonials">TESTIMONIALS</a> </li>
                    <li><a href="#offers">OFFERS</a> </li>
                    <li><a href="#contact">CONTACT</a> </li>
                    </ul>

                    {/* <input
                        type="text"
                        placeholder="Search"
                        className="p-2 border w-80 focus:ring-2 focus:ring-blue-300"
                    /> */}

                    
                </div>

                {/* Login/Signup Section */}
                <div className="flex items-center space-x-4">
              

                    <Link className="bg-green-500 p-3 text-white text-center font-medium text-xl w-28 rounded-md"to={"/login"} >LOGIN</Link>
                    
                    <Link className="border border-solid text-xl font-medium text-center rounded-md border-green-400 hover:bg-green-500 transition duration-300 hover:text-white p-3 w-28" to={"/sign-up"}>
                        SIGN UP
                    </Link>

                    
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
