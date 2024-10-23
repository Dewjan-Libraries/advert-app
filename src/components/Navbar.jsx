import React from 'react'
import logo from "../assets/images/image-22.png"


const Navbar = () => {
    return (
        <header>
           
            <nav className="flex items-center justify-between p-10   bg-white shadow-lg z-30 ">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">

                    <img className='h-20 w-38 object-contain' src={logo} alt="placeholder" />
                    {/* <span className="text-4xl font-bold text-lime-300 ">Post</span>
                    <span className="text-4xl font-bold text-gray-700">iize</span> */}

                </div>
                <div className="flex items-center space-x-2">

                    <select className="p-2 border  outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Select Category</option>
                        <option>All Categories</option>
                        <option >Vehicles</option>
                        <option >Mobiles</option>
                        <option >Electronic</option>
                        <option >Furniture</option>
                        <option >Real Estate</option>
                        <option>Fashion</option>
                        

                    </select>
                    <input
                        type="text"
                        placeholder="search"
                        className="p-2 border w-80  focus:ring-2 focus:ring-blue-300"
                    />
                    <div><button className="p-2 text-white w-28 bg-green-500 ">SEARCH</button></div>
                </div>
                <div className="flex items-center space-x-4 ">
                    <button className='bg-green-500 p-2 text-white w-28 rounded-md'>LOGIN</button>
                    <button className='border border-solid rounded-md border-green-400 hover:bg-green-500 transition duration-300 hover:text-white p-2 w-24'>SIGN UP</button>

                </div>
            </nav>
           
        </header>
    )
}

export default Navbar