import React from 'react'
import Navbar from '../../components/Navbar'
import RootLayout from '../../layouts/RootLayout'
import Hero from '../../components/Hero'
import Items from '../../components/Items'

const Home = () => {
  return (
    <div>
        <RootLayout>
        </RootLayout>
        <Hero/>
        <Items/>
    </div>
  )
}

export default Home