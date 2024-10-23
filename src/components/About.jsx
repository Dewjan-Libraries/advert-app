import React from 'react'



const About = () => {
  return (
    <div>

      <div className='grid grid-cols-3 gap-5 items-center justify-center p-14 leading-loose bg-white '>
        <div className='bg-[white] border-green-300 border-4 md:rounded-lg  p-4'>
          <h3 className='text-xl font-semibold'>About Us</h3>
          <p className='pt-3'> Adspot simplifies advertising for businesses with intuitive tools and precise targeting. We provide real-time analytics to maximize your ad’s impact. Boost your brand’s visibility with ads that deliver results.</p>
        </div>

        <div className=' p-4  border-green-300 border-4 md:rounded-lg '>
          <h3 className='text-xl  font-semibold'>Sell Safely</h3>
          <p className='pt-3'>Postiize makes selling safe and easy by connecting you with genuine buyers. We prioritize your privacy and provide guidelines to help you avoid scams. With Postiize, you can confidently monitize your items.</p>
        </div>

        <div className=' p-4  border-green-300 border-4 md:rounded-lg'>
          <h3 className='text-xl font-semibold'>Buy Safely</h3>
          <p className='pt-3'>Postiize connects you with verified sellers for a secure buying experience. We offer safety tips to ensure your transactions go smoothly. Shop confidently, knowing that your protection is our priority.</p>
        </div>

       

      </div>
    </div>
  )
}

export default About