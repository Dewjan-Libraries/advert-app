import React from 'react'
import Navbar from '../components/Navbar'
import pic from "../assets/images/image-2.png"

const RootLayout = ({headerText, children}) => {
  return (
    <div>
      <div className='z-30'> 
         <Navbar/>
         </div>
         <div className='flex flex-col items-center justify-center pt-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:space-x-20 bg-lime-50 -z-20 '>
          <div className=''>
         <div className='lg:max-w-lg lg:flex-1 ml-20 mb-10 '>
         <h1 className='text-black text-4xl font-extrabold text-center lg:text-left leading-tight mb-6'>Advertise Your Products with Dewjan{headerText}</h1>
        <p className='text-gray-700 text-lg font-medium text-center lg:text-left leading-relaxed mb-6'> Connect, Discover, Advertise — All in One Place! 
            <br />With Dewjan, reaching your audience has never been easier. 
            <br />Post your ads, find the best deals, and explore endless possibilities!{children}</p>
            <span className='text-green-400 text-2xl font-semibold '>Where ads meet opportunity</span>
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

export default RootLayout