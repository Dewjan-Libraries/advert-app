
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // State to manage the active view
  const [activeView, setActiveView] = useState('overview'); // Default view is 'overview'

  // Handler to switch views
  const handleViewChange = (view) => {
    setActiveView(view);
  };

  // Rendering the active component dynamically
  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <DashboardOverview />;
      case 'myAds':
        return <MyAds />;
      case 'home':
        return <Home />;
      case 'postAd':
        return <PostAd />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 h-screen p-4 bg-gray-200">
        <h2 className="font-bold text-xl mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <button
              className={`w-full p-2 ${activeView === 'overview' ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => handleViewChange('overview')}
            >
              Dashboard Overview
            </button>
          </li>
          <li className="mb-4">
            <Link to="/myads">
            <button
              className={`w-full p-2 ${activeView === 'myAds' ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => handleViewChange('myAds')}
            >
              My Ads
            </button>
            </Link>
           
          </li>
          <li className="mb-4">
            <button
              className={`w-full p-2 ${activeView === 'home' ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => handleViewChange('home')}
            >
              Home
            </button>
          </li>
          <li className="mb-4">
            <Link to="/post-ad">
            <button
              className={`w-full p-2 ${activeView === 'postAd' ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => handleViewChange('postAd')}
            >
              Post an Ad
            </button>
            </Link>
            
          </li>
          <li className="mb-4">
            
            <button className="w-full p-2 bg-red-500 text-white">Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content with Navbar */}
      <div className="w-3/4">
        {/* Navbar */}
        <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <a href="/" className="hover:text-gray-200">My Dashboard</a>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/profile" className="hover:text-gray-200">Profile</a></li>
              <li><a href="/settings" className="hover:text-gray-200">Settings</a></li>
              <li><a href="/logout" className="hover:text-gray-200">Logout</a></li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <div className="p-8">
          {renderContent()} {/* Render the active view dynamically */}
        </div>
      </div>
    </div>
  );
};

// Components for different views
const DashboardOverview = () => (
  <div>
    <h2 className="text-2xl font-bold">Dashboard Overview</h2>
    <p>Welcome to your dashboard. Here you can see an overview of your activity.</p>
  </div>
);

const MyAds = () => (
  <div>
    <h2 className="text-2xl font-bold">My Ads</h2>
    <p>Here are all the ads you have posted.</p>
  </div>
);

const Home = () => (
  <div>
    <h2 className="text-2xl font-bold">Home</h2>
    <p>This is the home section of your dashboard.</p>
  </div>
);

const PostAd = () => (
  <div>
    <h2 className="text-2xl font-bold">Post an Ad</h2>
    <p>Post a new ad from here.</p>
  </div>
);

export default Dashboard;





















// import React from "react";
// import { Link } from "react-router-dom";

// const VendorDashBoard = () => {
//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-[#22C55E] text-white h-screen">
//         <h1 className="text-2xl p-5 font-bold">Dashboard</h1>
//         <div className="flex text-2xl flex-col">
//           <Link to='/' className="p-4 hover:bg-green-900">Home</Link>
//           <Link to="/myads" className="p-4 hover:bg-green-900">My Ads</Link>
//           <Link to="/post-ad" className="p-4 hover:bg-green-900">Post an Ad</Link>

//         </div>
//       </div>


//       <div className="p-10 w-[100vw] bg-green-100 h-[100vh]">
//         <h1 className="text-2xl">
//           This is your account dashboard. The place to check your ads, respond
//           to your messages, view notifications or change any account settings or
//           details.
//         </h1>
//         {/* <Link
//           to="/myads"
//           className="border-2 h-[40%] lg-w-[30%] w-[30%] p-5 text-2xl bg-white justify-center  items-center flex flex-col"
//         >
//           <p
//             className=" p-5 bg-green-600 
//         w-[30%] rounded-full lg-w-[30%]  text-center"
//           >
//             icon
//           </p>
//           <p className="pt-10">MY ADS</p>
//         </Link>
//         <Link to="/post-ad" className="pt-10">
//           <button className="bg-green-600 border rounded-lg h-12" type="submit">
//             Post an Ad
//           </button>
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default VendorDashBoard;
