import React from 'react'
import pic from "../assets/images/image-18.jpg"
import pics from "../assets/images/image-5.jpg"
import picss from "../assets/images/image-11.webp"

const Items = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-10 p-20'>
        <div><img src={pic} alt="car" /></div>
        <div><img src={pics} alt="furniture" /></div>
        <div><img src={picss} alt="gadgets" /></div>
        </div>
    </div>
  )
}

export default Items