import React from 'react'


const Navbar = () => {
    return (
        <header>
            {/* <div className=' bg-emerald-600 bg-opacity-50  p-10  '>
                <div>
                    <div className='flex justify-between items-center '>
                        <div className='flex text-5xl items-center mb-6'>
                            <span className=' text-white font-serif italic font-extrabold '>Dew</span>
                            <span className=' text-black font-serif italic font-extrabold'>jan</span>
                        </div>

                        <div className='flex space-x-6 text-2xl font-bold items-center  -mt-12'>
                            <span>LOGIN</span>
                            <span>SIGNUP</span>
                        </div>
                    </div>
                </div>

                <nav >
                    <div className='flex items-center justify-center gap-3 -mb-4 '>
                        <div className='border border-neutral-400 border-solid '>
                            <select className='p-4 bg-slate-50 ' name="Category" id="Category">
                                
                                <option value="">All Categories</option>
                                <option value="">Vehicles</option>
                                <option value="">Mobiles</option>
                                <option value="">Electronic</option>
                                <option value="">Furniture</option>
                                <option value="">Jobs</option>
                                <option value="">Real Estate</option>
                                <option value="">Education</option>
                                <option value="">Fashion</option>
                                <option value="">Animals</option>

                            </select>
                            
                        </div>
                        <div className='border '>
                            <input className="p-4 w-96" type="text" placeholder='search' />
                        </div>
                        <div className="flex  items-center  ">
                            <button className='space-x-2 p-4 w-32 bg-green-500 text-white font-bold font-serif   hover:bg-green-600 transition duration-300' >Search</button>
                        </div>
                    </div>
                </nav>
            </div> */}
            <nav className="flex items-center justify-between p-10 bg-white shadow-lg z-30">
                {/* Logo Section */}
                <div className="flex items-center italic ">
                    <span className="text-4xl font-bold text-lime-300 ">Dew</span>
                    <span className="text-4xl font-bold text-gray-700">jan</span>
                </div>
                <div className="flex items-center space-x-2">

                    <select className="p-2 border  outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Select Category</option>
                        <option>All Categories</option>
                        <option >Vehicles</option>
                        <option >Mobiles</option>
                        <option >Electronic</option>
                        <option >Furniture</option>
                        <option >Jobs</option>
                        <option >Real Estate</option>
                        <option >Education</option>
                        <option>Fashion</option>
                        <option >Animals</option>

                    </select>
                    <input
                        type="text"
                        placeholder="search"
                        className="p-2 border w-80  focus:ring-2 focus:ring-blue-300"
                    />
                    <div><button className="p-2 text-white w-28 bg-green-500 ">SEARCH</button></div>
                </div>
                <div className="flex items-center space-x-4 ">
                   <button className='bg-green-500 p-2 w-20'>LOGIN</button>
                    <button className='bg-green-500 p-2 w-24'>REGISTER</button>

                </div>
            </nav>
        </header>
    )
}

export default Navbar