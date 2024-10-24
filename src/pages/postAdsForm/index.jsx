
import React, { useState } from "react";
// import { postAd } from '../services/api/advertApi'; // Assuming the API service
// import { postAd } from "../../services/advert";
import { apiPostAd } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const PostAd = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Assuming vendor token is stored in localStorage after login
  const token = localStorage.getItem("vendorToken");

  // if (!token) {
  //   navigate('/login'); // Redirect to login if token is missing
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !category ||
      !condition ||
      !price ||
      !brandName ||
      !description ||
      !image
    ) {
      setError("All fields are required.");
      return;
    }

    // Create FormData for file upload and text fields
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("condition", condition);
    formData.append("price", price);
    formData.append("brandName", brandName);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await apiPostAd(formData); // API call without token in the params
      if (response.status === 201) {
        setSuccess("Ad posted successfully!");
        setError("");
        navigate("/myads"); // Redirect after success
      }
    } catch (err) {
      setError("Failed to post advert. Please try again.");
    }
  };

  return (
    <div className="bg-img flex items-center justify-center min-h-screen">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      //{" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-4 lg:w-[500px] glass"
      >
        <h2 className="text-2xl font-bold text-center">Post Your Ad</h2>

        <div>
          <label htmlFor="title" className="block text-gray-800">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Item Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-800">
            Category
          </label>
          <select
            name="category"
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <input
            type="text"
            name="condition"
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label htmlFor="brandName" className="block text-gray-800">
            Brand Name
          </label>
          <input
            type="text"
            name="brandName"
            id="brandName"
            placeholder="Specify Brand"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-800">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="$"
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Describe Item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-24"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
             id="image"
            placeholder="Upload Item Image"
            required
            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-32"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

          {/* <Link to='/'> */}
        <button
          type="submit"
          className="w-full py-2 bg-[#22C55E] hover:bg-green-900 text-white rounded "
        >
           Post Advert
        </button>
        {/* </Link> */}
        </form>
    </div>
  );
};

export default PostAd;














// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import { apiPostAd } from '/post';

// const PostAd = () => {

// const handleSubmit = async (event) => {
//   event.preventDefault()

//   const formData = new FormData(event.target)
//   const title = formData.post("title");
//   const category = formData.post("category");
//   const condition = formData.post("condition");
//   const brandName = formData.post("brandName");
//   const price = formData.post("price");
//   const description = formData.post("description");
//   const image = formData.post("image");

//   const response = await apiPostAd({title, category, condition, brandName, price, description, image });

//   // await axios.post (`${import.meta.env.VITE_BASE_URL}/ads`, formData)
// }

//   return (
//     <div className="bg-img flex items-center justify-center min-h-screen">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-4 lg:w-[500px] glass"
//       >
//         <h2 className="text-2xl font-bold text-center">Post Your Ad</h2>

//         <div>
//           <label className="block text-gray-800">Title </label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             placeholder="Enter Item Name"
//             required
//             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-800">Category </label>
//           <select
//             name="category"
//             type="text"
//             id="category"
//             required
//             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
//           >
//             <option value="">Select Category</option>
//             <option value="Vehicles">Vehicles</option>
//             <option value="Mobiles">Mobiles</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Furniture">Furniture</option>
//             <option value="Real Estate">Real Estate</option>
//             <option value="Fashion">Fashion</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-800">Condition </label>
//           <div className=' flex gap-10'>
//             <label>
//               <input
//                 type="radio"
//                 name="condition"
//                 id="used"
//                 required
//               />
//               Used
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="condition"
//                 id="brand new"
//                 required
//               />
//               Brand New
//             </label>
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-800">Brand Name </label>
//           <input
//            type="text"
//            name="brandName"
//           id="brandName"
//            placeholder="Specify Brand"
//            required
//            className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-800">Price </label>
//           <input
//             name="price"
//             type="text"
//            id="price"
//             placeholder="$ "
//             required
//             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-[#22C55E]">Description </label>
//           <textarea
//           type="text"
//             name="description"
//            id="description"
//             placeholder="Describe Item ."
//             required
//             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-24"
//           />
//         </div>

//         <div>
//           <label className="block text-[#22C55E]">Image</label>
//           <input
//           type="file"
//             name="icon"
//             placeholder="Upload Item Image"
//             required
//             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-32"
//           />
//         </div>

//         {/* <Link to='/'> */}
//         <button
//           type="submit"
//           className="w-full py-2 bg-[#22C55E] hover:bg-green-900 text-white rounded "
//         >
//           Submit
//         </button>
//         {/* </Link> */}
//         </form>

//     </div>
//   );
// };

// export default PostAd;