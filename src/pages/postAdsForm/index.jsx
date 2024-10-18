import React from "react";

const PostAd = () => {
  return (
    <div className="bg-[#f7fee7] pb-20">
      <div className="flex pt-10 justify-center">
        <div className="flex justify-center p-6 rounded-md w-[40%] lg:w-[40%] bg-white shadow-lg">
          <form className="w-[300px] lg:w-[300px] " action="">
            <div className="flex flex-col  items-center pb-5">
              <label className="text-2xl" htmlFor="title ">Title</label>
              <input
                className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)]  w-[100%] h-10 "
                type="text"
                placeholder="Enter item name"
              />
            </div>
            <div className="flex flex-col  items-center pb-5">
              <label className="text-2xl" htmlFor="title ">Brand Name</label>
              <input
                className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)]  w-[100%] h-10 "
                type="text"
                placeholder="Enter Brand name"
              />
            </div>
        
            <div className="flex flex-col items-center pb-5">
              <label className="text-2xl" htmlFor=" Category">Category</label>
              <input className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)] w-[100%] h-10" type="text" placeholder="Enter Category" />
            </div>
            <div className="flex flex-col  items-center pb-5">
              <label className="text-2xl" htmlFor="title ">Condition</label>
              <input
                className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)] w-[100%] h-10 "
                type="text"
                placeholder="Enter item name"
              />
            </div>
            <div className="flex flex-col items-center pb-5 ">
              <label className="text-2xl"  htmlFor="Price">
               Price
              </label>
              <input className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)] w-[100%] h-10" type="text" placeholder="GH ₵" />
            </div>
            <div className="flex flex-col items-center pb-5">
              <label className="text-2xl " htmlFor="Description "> Ad Description</label>
              <input className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)] w-[100%] h-40" type="text" placeholder="Describe Item" />
            </div>
            <div className="flex flex-col items-center pb-5 ">
              <label className="text-2xl"  htmlFor="Image">
                Image
              </label>
              <input className="border-2 border-[#22C55E] hover:bg-[rgba(55,197,107,0.7)] w-[100%] h-10" type="text" placeholder="Upload item image" />
            </div>
            <div className="bg-[#22C55E] p-2 rounded-lg lg:w-24 w-24 text-2xl text-center boldest ">
            <button type="submit">Post</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
