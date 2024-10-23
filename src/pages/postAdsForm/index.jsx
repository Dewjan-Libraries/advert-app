
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PostAd = () => {

const navigate = useNavigate ()

const saveAd = async (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  await axios.post (`${import.meta.env.VITE_BASE_URL}/`)
}

  // const [formData, setFormData] = useState({
  //   vendor:'vendor',
  //   title: 'title',
  //   category: 'category',
  //   condition: 'condition',
  //   brandName: 'brandName',
  //   price: 'price',
  //   description: 'description',
  //   image:'image',
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   ventpreventDefault();
  //   consolventlog(formData);
    
  // };

  return (
    <div className="bg-img flex items-center justify-center min-h-screen">
    
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-4 lg:w-[500px] glass"
      >
        <h2 className="text-2xl font-bold text-center">Post Your Ad</h2>

        <div>
          <label className="block text-gray-800">Vendor Name </label>
          <input
            type="text"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            placeholder="Enter Vendor Name"
      
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label className="block text-gray-800">Title </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Item Name"
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label className="block text-gray-800">Category </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          >
            <option value="">Select Category</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800">Condition </label>
          <div className=' flex gap-10'>
            <label>
              <input
                type="radio"
                name="condition"
                value="used"
                onChange={handleChange}
                required
              />
              Used
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                value="brand new"
                onChange={handleChange}
                required
              />
              Brand New
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-800">Brand Name </label>
          <input
           type="text"
           name="brandName"
           value={formData.brandName}
           onChange={handleChange}
           placeholder="Specify Brand"
           required
           className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label className="block text-gray-800">Price </label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="GH ₵"
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label className="block text-[#22C55E]">Description </label>
          <textarea
          type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe Item ."
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-24"
          />
        </div>

        <div>
          <label className="block text-[#22C55E]">Image</label>
          <image 
          type="image"
          // src={`https://savefiles.org/${icon}?shareable_link=391`}
          // alt={title}
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Upload Item Image"
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-32"
          />
        </div>

        <Link to='/'>
        <button
          type="submit"
          className="w-full py-2 bg-[#22C55E] hover:bg-green-900 text-white rounded "
        >
          Submit
        </button>
        </Link>
        </form>
        
    </div>
  );
};

export default PostAd;
