import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGetAdDetail, apiEditAdDetail } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const EditAd = () => {
    // const handleSubmit = async (event) => event.preventDefault();
const {id} = useParams()
const [advert, setAdvert] = useState({
    title: '',
    category: '',
    condition: '',
    price: '',
    brandName: '',
    description: '',
    image: ''   
})

const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const navigate = useNavigate();

useEffect(() => {
    const fetchAdvertDetail = async () => {
      try {
        const response = await apiGetAdDetail(id);
        setAdvert(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching advert details.');
        setLoading(false);
      }
    };

    fetchAdvertDetail();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdvert({ ...advert, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiEditAdDetail(id, advert); // Update advert using your API function
      setSuccessMessage('Advert updated successfully!');
      // Optionally, redirect to another page after success
      navigate(`/myadverts`);
    } catch (err) {
      setError('Failed to update advert.');
    }
  };

  if (loading) {
    return <div>Loading advert...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Edit Advert</h1>
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={advert.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-lg font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={advert.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="condition" className="block text-lg font-medium">Condition</label>
          <input
            type="text"
            name="condition"
            value={advert.condition}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-lg font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={advert.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="brandName" className="block text-lg font-medium">Brand Name</label>
          <input
            type="text"
            name="brandName"
            value={advert.brandName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            name="description"
            value={advert.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-lg font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={advert.image}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-3 rounded-lg">
          Update Advert
        </button>
      </form>
    </div>
  );
};
export default EditAd;

// <div className=' ml-4 '>
//                 <button className="flex items-center p-2 text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-all duration-200  border-gray-300 rounded-full " type='submit'>

//                 </button>
//             </div>

//             <div>
//                 <form className="pic max-w-xl mx-auto  p-8 rounded-lg shadow-2xl mt-10">
//                     <h2 className="text-2xl text-white font-semibold mb-6 text-center">Edit Ad Details</h2>

//                     <div className="mb-6">
//                         <label className="block text-white font-medium">Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             //   value="title"
//                             className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter book title"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-white font-medium">Author</label>
//                         <select
//                             name="author"
//                             //   value="genre"
//                             className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="Fiction">Fiction</option>
//                             <option value="Non-Fiction">Non-Fiction</option>
//                             <option value="Science">Science</option>
//                             <option value="History">History</option>
//                         </select>
//                     </div>

//                     <div className="mb-6">
//                         <label className="block text-white font-medium">Genre</label>
//                         <select
//                             name="genre"
//                             //   value="genre"
//                             className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="Fiction">Fiction</option>
//                             <option value="Non-Fiction">Non-Fiction</option>
//                             <option value="Science">Science</option>
//                             <option value="History">History</option>
//                         </select>
//                     </div>

//                     <div className="flex justify-end mt-8">
//                         <button
//                             type="submit"
//                             className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500"
//                         >
//                             Save Changes
//                         </button>
//                         <button
//                             type="button"
//                             className="ml-4 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
