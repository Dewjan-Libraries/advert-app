import React from 'react'
import Navbar from '../../components/Navbar'
import RootLayout from '../../layouts/RootLayout'
import Hero from '../../components/Hero'
import Items from '../../components/Items'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import Download from '../../components/Download'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <div>
        <RootLayout>
        </RootLayout>
        <Hero/>
        <Items/>
        <Testimonials/>
        <About/>
        <Download/>
        <Footer/>
       
    </div>
  )
}

export default Home