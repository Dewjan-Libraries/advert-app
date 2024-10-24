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
                    <ul className='flex justify-between gap-5 font-semibold text-gray-800 text-xl'>
                        <li className=''>HOME</li>
                        <li>TESTIMONIALS</li>
                        <li>OFFERS</li>
                    </ul>

                    {/* <input
                        type="text"
                        placeholder="Search"
                        className="p-2 border w-80 focus:ring-2 focus:ring-blue-300"
                    /> */}

                    
                </div>

                {/* Login/Signup Section */}
                <div className="flex items-center space-x-4">
                <div>
                        <Link
                            type='submit' 
                            className="p-3  text-white w-28 bg-green-500"
                            to={"/list"}
                        >
                            GET STARTED
                        </Link>
                    </div>

                    <Link className="bg-green-500 p-2 text-white text-center  w-28 rounded-md"to={"/login"} >LOGIN</Link>
                    
                    <Link className="border border-solid  text-center rounded-md border-green-400 hover:bg-green-500 transition duration-300 hover:text-white p-2 w-24" to={"/sign-up"}>
                        SIGN UP
                    </Link>

                    
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
