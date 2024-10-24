import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import pic from "../assets/images/image-18.jpg";
import pics from "../assets/images/image-5.jpg";
import picss from "../assets/images/image-11.webp";
import { FaArrowCircleRight } from "react-icons/fa";

const Items = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Function to handle navigation with a category
  const handleCategoryClick = (category) => {
    navigate(`/list?category=${category}`);
  };

  return (
    <div>
      <div className='grid grid-cols-3 gap-10 p-20 md:p-24 lg-28'>
        <div className='relative' onClick={() => handleCategoryClick('Vehicles')}>
          <img src={pic} alt="car" />
          <div className="absolute w-80 mb-4 bottom-0 left-0 bg-yellow-400 bg-opacity-75 text-white p-3 flex items-center justify-between cursor-pointer">
            <span className="text-lg font-semibold">Shop Vehicles</span>
            <FaArrowCircleRight />
          </div>
        </div>

        <div className='relative' onClick={() => handleCategoryClick('Furniture')}>
          <img src={pics} alt="furniture" />
          <div className="absolute w-80 mb-4 bottom-0 left-0 bg-blue-300 bg-opacity-75 text-white p-3 flex items-center justify-between cursor-pointer">
            <span className="text-lg font-semibold">Shop Furniture</span>
            <FaArrowCircleRight />
          </div>
        </div>

        <div className='relative' onClick={() => handleCategoryClick('Electronics')}>
          <img src={picss} alt="gadgets" />
          <div className="absolute w-80 mb-4 bottom-0 left-0 bg-black bg-opacity-75 text-white p-3 flex items-center justify-between cursor-pointer">
            <span className="text-lg font-semibold">Shop Electronics</span>
            <FaArrowCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
