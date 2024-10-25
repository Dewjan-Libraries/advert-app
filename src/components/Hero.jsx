import React from 'react'
import pic from "../assets/images/image-26.png"
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div id='home'>
         <div className='flex flex-col items-center justify-center pt-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:space-x-20 bg-lime-50 -z-20 '>
          <div className=''>
         <div className='lg:max-w-lg lg:flex-1 ml-20 mb-10 '>
         <h1 className='text-black text-4xl font-extrabold text-center lg:text-left leading-tight mb-6'>Advertise Your Products with Postiize.</h1>
        <p className='text-gray-700 text-lg font-medium text-center lg:text-left leading-relaxed mb-6'> Connect, Discover, Advertise — All in One Place! 
            <br />With Postiize, reaching your audience has never been easier. 
            <br />Post your ads, find the best deals, and explore endless possibilities!</p>
            <span className='text-green-400 text-2xl font-semibold '>Post with ease!

            <div className='mt-12 '>
                        <Link
                            type='submit' 
                            className="p-4  hover:bg-green-800   text-white font-semibold text-xl w-28 bg-green-500"
                            to={"/list"}
                        >
                            GET STARTED
                        </Link>
                    </div>
                    </span>
    </div>
    </div>

    <div className='relative w-full  lg:w-1/2 lg:max-w-lg lg:h-auto mr-20  lg:mt-0'>
      <div className='absolute  bg-gray-600'></div>
      <img className='relative ' src={pic} alt="placeholder" />
    </div>
    </div>
    </div>
  )
}

export default Hero