import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'


import './App.css'
import VendorDashBoard from './pages/VendorDashBoard'
import MyAdPage from './pages/myAdsPage'
import PostAd from './pages/postAdsForm'
import Home from './pages/Home/Home'

function App() {
  const   router = createBrowserRouter ([

{
  path:'/vendor-dashboard',
  element:<VendorDashBoard/>
},
{
  path:'/myads',
  element:<MyAdPage/>
},
{
  path:'/post-ad',
  element:<PostAd/>
},
 {path:"/",
  element:<Home/>,
 },


    
  ])

 
  return <RouterProvider router = {router}/>
}



export default App
