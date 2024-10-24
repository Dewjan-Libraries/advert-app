import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'


import './App.css'


import PostAd from './pages/postAdsForm'
import Home from './pages/Home/Home'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import EditAd from './pages/editadvert'
import VendorDashBoard from './pages/VendorDashBoard'
import ProductList from './pages/DisplayCars'
import ProductDetail from './pages/SingleAd'
import MyAdverts from './pages/myAdsPage'
import AdDetail from './pages/AdvertDetails'


function App() {
  const   router = createBrowserRouter ([

{
  path:'/vendor-dashboard',
  element:<VendorDashBoard/>
},
{
  path:'/myads',
  element:<MyAdverts/>
},
{
  path:'/myaddetail/:id',
  element:<AdDetail/>
},

{
  path:'/post-ad',
  element:<PostAd/>
},

{
  path:'/sign-up',
  element:<Signup/>
},
{
  path:'/login',
  element:<Login/>
},

 {path:"/",
  element:<Home/>,
 },

 {path:"/list",
  element:<ProductList/>,
 },

 {path:"/product/:id",
  element:<ProductDetail/>,
 },
 {path:"/edit/:id",
  element:<EditAd/>,
 },

 


    
  ])

 
  return <RouterProvider router = {router}/>
}



export default App
