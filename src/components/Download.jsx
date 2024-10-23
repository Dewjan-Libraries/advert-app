import React from 'react'
import img from "../assets/images/image-29.png"
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

const Download = () => {
  return (
    <div>
<div className="bg-lime-50 py-12   ">
      <div className="max-w-7xl mx-40 flex gap-12 flex-col md:flex-row items-center justify-between px-6">
        {/* Phone Images Section */}
        <div className="flex mb-8 md:mb-0">
          <img
            src={img}
            alt="Phone 1"
          />
        </div>

        {/* Text and Download Buttons Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Make Money With Your Phone
          </h2>
          <p className="text-lg font-semibold text-gray-600 mb-4 mt-6">
            Download Free Postiize App
          </p>
          <div className="flex justify-center md:justify-start space-x-4 p-3">
            <a href="#" className="flex items-center space-x-2 text-green-500 hover:text-green-800">
            <div className=" border border-green-500 rounded-full p-4 justify-center text-center bg-white"><FaGooglePlay className='items-center text-center '/></div> 
              <span className='text-black'>Google Play</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800">
            <div className="border border-blue-600 rounded-full  p-4 justify-center text-center bg-white "><BsApple /></div>
              <span className='text-black'>Apple Store</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-700 hover:text-red-800">
              <div className="border border-red-700 rounded-full p-4 justify-center text-center bg-white"><FaWindows /></div>  
              <span className='text-black'>Windows Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Download