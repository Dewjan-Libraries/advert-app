import React from 'react'

const Testimonials = () => {
    return (
        <div id='testimonials'>
        <div className="bg-[#37415204] py-16  flex flex-row items-center justify-center min-h-screen">
            
        <div className="grid grid-row-1 sm:grid-row-2 lg:grid-row-2 gap-4 max-w-5xl px-4">
        <h1 className='text-center font-serif text-3xl font-semibold'>TESTIMONIALS</h1>
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 text-lg italic mb-4">
                    “Using this advert app has transformed the way I reach my customers. The intuitive design and powerful targeting tools helped me increase my sales by 50% in just a few months. It's a game-changer for any small business!”
                </p>
                <h6 className="font-bold text-gray-900">William Offei Nyanteh, Small Business Owner</h6>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 text-lg italic mb-4">
                    “This app makes creating and managing ads so easy. I love the real-time analytics and insights—it helps me adjust my campaigns quickly for maximum impact. It’s become an essential tool in my marketing strategy!”
                </p>
                <h6 className="font-bold text-gray-900">Deborah Amuzu, Marketing Specialist</h6>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 text-lg italic mb-4">
                    “I've tried many advertising platforms, but this one stands out. It's user-friendly, cost-effective, and delivers great results. My business saw a huge boost in visibility, and I couldn't be happier with the performance!”
                </p>
                <h6 className="font-bold text-gray-900">Nkunim Asaah, Entrepreneur</h6>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 text-lg italic mb-4">
                    “This advert app has made promoting my content so effortless! The customizable ad options and precise audience targeting have significantly increased my engagement. I highly recommend it to anyone looking to grow their online presence!”
                </p>
                <h6 className="font-bold text-gray-900">Jacquiline Offei, Content Creator</h6>
            </div>
        </div>
    </div>
    </div>
);
}

export default Testimonials