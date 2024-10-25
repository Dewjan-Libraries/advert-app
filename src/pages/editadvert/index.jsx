// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import { apiGetAdDetail, apiEditAdDetail } from "../../services/auth";
// // // import { useNavigate } from "react-router-dom";

// // // const EditAd = () => {
// // //     // const handleSubmit = async (event) => event.preventDefault();
// // // const {id} = useParams()
// // // const [advert, setAdvert] = useState({
// // //     title: '',
// // //     category: '',
// // //     condition: '',
// // //     price: '',
// // //     brandName: '',
// // //     description: '',
// // //     image: ''
// // // })

// // // const [loading, setLoading] = useState(true);
// // // const [error, setError] = useState('');
// // // const [successMessage, setSuccessMessage] = useState('');
// // // const navigate = useNavigate();

// // // useEffect(() => {
// // //     const fetchAdvertDetail = async () => {
// // //       try {
// // //         const response = await apiGetAdDetail(id);
// // //         setAdvert(response.data);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError('Error fetching advert details.');
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchAdvertDetail();
// // //   }, [id]);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setAdvert({ ...advert, [name]: value });
// // //   };

// // //   const handleFormSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await apiEditAdDetail(id, advert); // Update advert using your API function
// // //       setSuccessMessage('Advert updated successfully!');
// // //       // Optionally, redirect to another page after success
// // //       navigate(`/myadverts`);
// // //     } catch (err) {
// // //       setError('Failed to update advert.');
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div>Loading advert...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="text-red-500">{error}</div>;
// // //   }

// // //   return (
// // //     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
// // //       <h1 className="text-2xl font-bold mb-6">Edit Advert</h1>
// // //       {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
// // //       <form onSubmit={handleFormSubmit} className="space-y-4">
// // //         <div>
// // //           <label htmlFor="title" className="block text-lg font-medium">Title</label>
// // //           <input
// // //             type="text"
// // //             name="title"
// // //             value={advert.title}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="category" className="block text-lg font-medium">Category</label>
// // //           <input
// // //             type="text"
// // //             name="category"
// // //             value={advert.category}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="condition" className="block text-lg font-medium">Condition</label>
// // //           <input
// // //             type="text"
// // //             name="condition"
// // //             value={advert.condition}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="price" className="block text-lg font-medium">Price</label>
// // //           <input
// // //             type="number"
// // //             name="price"
// // //             value={advert.price}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="brandName" className="block text-lg font-medium">Brand Name</label>
// // //           <input
// // //             type="text"
// // //             name="brandName"
// // //             value={advert.brandName}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="description" className="block text-lg font-medium">Description</label>
// // //           <textarea
// // //             name="description"
// // //             value={advert.description}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="image" className="block text-lg font-medium">Image URL</label>
// // //           <input
// // //             type="text"
// // //             name="image"
// // //             value={advert.image}
// // //             onChange={handleInputChange}
// // //             className="w-full border border-gray-300 rounded-md p-2"
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="mt-4 bg-blue-500 text-white p-3 rounded-lg">
// // //           Update Advert
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };
// // // export default EditAd;

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { apiGetAds } from "../../services/auth";
// // import { apiGetVendorAds } from "../../services/auth";
// // import MyAdverts from "../myAdsPage";


// // const EditAd = () => {
// //   const [adverts, setAdverts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);


// //   const handleSubmit = async (event) => event.preventDefault();

// //   const handleFormSubmit = async (e) => {
// //        e.preventDefault();

// // const getAdvert = async () => {
// //     try {
     
// //       const response = await apiGetVendorAds(); // to call vendor ads only
// //     //   console.log(response.data);
// //       setAdverts(response.data);
// //     } catch (err) {
// //         setError("Failed to load adverts.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// // useEffect (() => {  //callback your function(getAdvert)
// //     getAdvert()
// // }, []);

// // if (loading) {
// //     return <div className="text-center py-12">Loading adverts...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-center py-12 text-red-500">{error}</div>;
// //   }

// //    return (

// //     <div className="bg-blue-50 py-12">
// //     <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
// //       {/* Add Advert Button */}
// //       {/* <Link
// //         to="/postingform" */}
// //         className="inline-block px-8 py-3 mb-8 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 font-poppins"
      
// //         + Add Advert
// //       {/* </Link> */}

// //       {/* Header */}
// //       <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center font-poppins">
// //         All Adverts
// //       </h1>

// //  {/* Adverts Grid */}
// //  {adverts.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-roboto">
// //             {adverts.map((advert) => (
// //               <AdvertTile // Use AdvertTile component
// //                 key={advert.id}
// //                 id={advert.id}
// //                 title={advert.title}
// //                 description={advert.description}
// //                 image={advert.image || 'https://via.placeholder.com/150'}
// //                 category={advert?.category?.brand}
// //                 price={advert.price}
// //               />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="text-center py-12">No adverts available at the moment.</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };
// // }
// //  export default EditAd

// // {/* <div className="bg-img flex items-center justify-center min-h-screen">
// //       {/* {error && <p className="text-red-500 mb-4">{error}</p>}
// //       {success && <p className="text-green-500 mb-4">{success}</p>}
// //       //{" "}
// //        */}
// // //       <form
// // //         onSubmit={handleFormSubmit}
// // //         className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-4 lg:w-[500px] glass"
// // //       >
// // //         <h2 className="text-2xl font-bold text-center">Post Your Ad</h2>

// // //         <div>
// // //           <label htmlFor="title" className="block text-gray-800">
// // //             Title
// // //           </label>
// // //           <input
// // //             type="text"
// // //             id="title"
// // //             name="title"
// // //             placeholder="Enter Item Name"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label htmlFor="category" className="block text-gray-800">
// // //             Category
// // //           </label>
// // //           <select
// // //             name="category"
// // //             type="text"
// // //             id="category"
// // //             value={category}
// // //             onChange={(e) => setCategory(e.target.value)}
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
// // //           >
// // //             <option value="">Select Category</option>
// // //             <option value="Vehicles">Vehicles</option>
// // //             <option value="Mobiles">Mobiles</option>
// // //             <option value="Electronics">Electronics</option>
// // //             <option value="Furniture">Furniture</option>
// // //             <option value="Real Estate">Real Estate</option>
// // //             <option value="Fashion">Fashion</option>
// // //           </select>
// // //         </div>

// // //         <div>
// // //           <label className="block text-gray-800">Condition </label>
// // //           <input
// // //             type="text"
// // //             name="condition"
// // //             id="condition"
// // //             value={condition}
// // //             onChange={(e) => setCondition(e.target.value)}
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label htmlFor="brandName" className="block text-gray-800">
// // //             Brand Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="brandName"
// // //             id="brandName"
// // //             placeholder="Specify Brand"
// // //             value={brandName}
// // //             onChange={(e) => setBrandName(e.target.value)}
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label htmlFor="price" className="block text-gray-800">
// // //             Price
// // //           </label>
// // //           <input
// // //             type="text"
// // //             id="price"
// // //             name="price"
// // //             value={price}
// // //             onChange={(e) => setPrice(e.target.value)}
// // //             placeholder="$"
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label
// // //             htmlFor="description"
// // //             className="block text-sm font-medium text-gray-700"
// // //           >
// // //             Description
// // //           </label>
// // //           <textarea
// // //             id="description"
// // //             name="description"
// // //             type="text"
// // //             placeholder="Describe Item"
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-24"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label
// // //             htmlFor="image"
// // //             className="block text-sm font-medium text-gray-700"
// // //           >
// // //             Image
// // //           </label>
// // //           <input
// // //             type="file"
// // //             name="image"
// // //              id="image"
// // //             placeholder="Upload Item Image"
// // //             required
// // //             className="block w-full p-2 border focus:outline-none border-[#22C55E] rounded h-32"
// // //             onChange={(e) => setImage(e.target.files[0])}
// // //           />
// // //         </div>

// // //           {/* <Link to='/'> */}
// // //         <button
// // //           type="submit"
// // //           className="w-full py-2 bg-[#22C55E] hover:bg-green-900 text-white rounded "
// // //         >
// // //            Post Advert
// // //         </button>
// // //         {/* </Link> */}
// // //         </form>
// // //     </div>
   
// // //   );
// // // } */}
// // // }
// // // export default EditAd;



// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { apiGetAdDetail, apiEditAdDetail } from '../../services/auth'; // Assume apiUpdateAd is an API function
// import axios from 'axios';
// import { apiDeleteAd } from '../../services/auth';
// const EditAd = () => {
//   const { id } = useParams();
//   const [advert, setAdvert] = useState({
//     title: '',
//     category: '',
//     condition: '',
//     price: '',
//     brandName: '',
//     description: '',
//     image: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAdvertDetail = async () => {
//       try {
//         const response = await apiGetAdDetail(id);
//         setAdvert(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching advert details.');
//         setLoading(false);
//       }
//     };

//     fetchAdvertDetail();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAdvert({ ...advert, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await apiEditAdDetail(id, advert); // Update advert using your API function
//       setSuccessMessage('Advert updated successfully!');
//       // Optionally, redirect to another page after success
//       navigate(`/myads`);
//     } catch (err) {
//       setError('Failed to update advert.');
//     }
//   };


//   if (loading) {
//     return <div>Loading advert...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold mb-6">Edit Advert</h1>
//       {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
//       <form onSubmit={handleFormSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-lg font-medium">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={advert.title}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="category" className="block text-lg font-medium">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={advert.category}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="condition" className="block text-lg font-medium">Condition</label>
//           <input
//             type="text"
//             name="condition"
//             value={advert.condition}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="price" className="block text-lg font-medium">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={advert.price}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="brandName" className="block text-lg font-medium">Brand Name</label>
//           <input
//             type="text"
//             name="brandName"
//             value={advert.brandName}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block text-lg font-medium">Description</label>
//           <textarea
//             name="description"
//             value={advert.description}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="image" className="block text-lg font-medium">Product Image</label>
//           <input
//             type="text"
//             name="image"
//             value={advert.image}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <button type="submit" className="mt-4 bg-blue-500 text-white p-3 rounded-lg">
//           Update Advert
//         </button>
//       </form>

   

//     </div>
//   );
// };

// export default EditAd;




import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiGetAdDetail, apiEditAdDetail } from '../../services/auth';

const EditAd = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        condition: '',
        price: '',
        brandName: '',
        description: '',
        image: null // Field for the image file
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdDetail = async () => {
            try {
                const response = await apiGetAdDetail(id);
                setFormData({
                    title: response.data.title,
                    category: response.data.category,
                    condition: response.data.condition,
                    price: response.data.price,
                    brandName: response.data.brandName,
                    description: response.data.description,
                    image: null // Start with no image initially
                });
            } catch (error) {
                console.error("Error fetching ad detail:", error);
                alert("Error fetching ad details. Please try again.");
            }
        };
        fetchAdDetail();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value // Handle file input
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(); // Use FormData to handle file uploads
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            await apiEditAdDetail(id, data); 
            // navigate('/myads'); // Redirect after successful update
        } catch (error) {
            console.error("Error updating ad:", error);
            if (error.response && error.response.status === 401) {
                alert("Unauthorized. Please log in again.");
                localStorage.removeItem("token"); 
                window.location.href = "/login"; 
            } else {
                alert("Error updating ad. Please try again.");
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-3xl font-bold text-center mb-4">Edit Advert</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <input
                    type="text"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    placeholder="Condition"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Brand"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="border rounded-md p-2 w-full mb-4"
                />
                <input
                    type="file"
                    name="image"
                    // value={formData.image}
                    onChange={handleChange}
                    className="border rounded-md p-2 w-full mb-4"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-900"
                >
                    Update Advert
                </button>
            </form>
        </div>
    );
};

export default EditAd;