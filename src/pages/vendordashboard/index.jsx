
import React from "react";
import { Link } from "react-router-dom";

const VendorDashBoard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-[#22C55E] text-white h-screen">
        <h1 className="text-2xl p-5 font-bold">Dashboard</h1>
        <div className="flex text-2xl flex-col">
          <Link to='/' className="p-4 hover:bg-green-900">Home</Link>
          <Link to="/myads" className="p-4 hover:bg-green-900">My Ads</Link>
          <Link to="/post-ad" className="p-4 hover:bg-green-900">Post an Ad</Link>

        </div>
      </div>


      <div className="p-10 w-[100vw] bg-green-100 h-[100vh]">
        <h1 className="text-2xl">
          This is your account dashboard. The place to check your ads, respond
          to your messages, view notifications or change any account settings or
          details.
        </h1>
        {/* <Link
          to="/myads"
          className="border-2 h-[40%] lg-w-[30%] w-[30%] p-5 text-2xl bg-white justify-center  items-center flex flex-col"
        >
          <p
            className=" p-5 bg-green-600 
        w-[30%] rounded-full lg-w-[30%]  text-center"
          >
            icon
          </p>
          <p className="pt-10">MY ADS</p>
        </Link>
        <Link to="/post-ad" className="pt-10">
          <button className="bg-green-600 border rounded-lg h-12" type="submit">
            Post an Ad
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default VendorDashBoard;
