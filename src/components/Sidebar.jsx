import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    
    <div className="w-1/4 bg-[#22C55E] text-white h-screen">
    <h1 className="text-2xl p-5 font-bold">Dashboard</h1>
    <div className="flex text-2xl flex-col">
      <Link to='/' className="p-4 hover:bg-green-900">Home</Link>
      <Link to="/myads" className="p-4 hover:bg-green-900">My Ads</Link>
      <Link to="/post-ad" className="p-4 hover:bg-green-900">Post an Ad</Link>

    </div>
  </div>


    
  //   <div className="w-1/4 bg-[#22C55E] p-5  text-white ">
  //   <h2 className="text-lg font-bold mb-5">Sidebar</h2>
  //   <div className='flex flex-col'>
   
  //     <Link href="#" className=" mb-3">DashBoard</Link>
  //     <Link href="/myads" className=" mb-3">My Ads</Link>
  //     <Link href="/" className=" mb-3">Home</Link>
  //     {/* <Link href="#" className=" mb-3">Link 4</Link>  */}
   
  //   </div>
    
  // </div>
  )
}

export default Sidebar