import React from "react";
import { Link } from "react-router-dom";

const VendorDashBoard = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-10 w-[100vw] bg-slate-300 h-[100vh]">
      <h1 className="pb-10 text-2xl">
        This is your account dashboard. The place to check your ads, respond to
        your messages, view notifications or change any account settings or
        details.
      </h1>
      <Link to="/myads" className="border-2 h-[40%] lg-w-[30%] w-[30%] p-5 text-2xl bg-white justify-center  items-center flex flex-col">
        <p className=" p-5 bg-green-600 
        w-[30%] rounded-full lg-w-[30%]  text-center">
          icon
        </p>
        <p className="pt-10">MY ADS</p>
      </Link>
      <Link to="/post-ad" className="pt-10">
        <button className="bg-green-600 border rounded-lg h-12" type="submit">
          Post an Ad
        </button>
      </Link >
    </div>
  );
};

export default VendorDashBoard;

{
  /* <div className="w-[40%]">
        <img
          className="w-[52] h-[52] pb-10"
          src="C:\Users\debam\Desktop\react_project_theo\advert-app\src\assets\image\mest logo.png"
          alt="image"
        />

        <Link to="">
          <h1 className="pb-5">Dashboard</h1>
        </Link>
        <Link to="">
          <h1>My Ads</h1>
        </Link>
      </div> */
}
