import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  // Step 1: Get the product ID from the URL using useParams
  const { id } = useParams(); 

  // Step 2: State to store the product details and loading status
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Step 3: Fetch the product details when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        //  Fetching product data using axios and the product ID from the URL
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${id}`);
        
        //  Storing the product details in the state
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProduct(); // Fetch the product data on mount
  }, [id]); // Run this effect when the 'id' changes

  // Step 6: Display loading message while the product is being fetched
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // Step 7: If no product is found, display an error message
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Step 8: Display the product details once fetched
  return (
    <div className="p-14 bg-lime-50  ">
        <Link className='text-4xl ' to={"/list"}  ><IoArrowBackCircleOutline /></Link>
        <h2 className="text-2xl font-bold mt-8 mb-4 flex mr-20 justify-center">{product.title}</h2>
        <div className='flex ml-60 space-x-20'>
          
  
      
      {/* Product Image */}
      <div>
      <img src={`https://savefiles.org/${product.image}?shareable_link=449`} alt={product.title} className="mb-4 h-96   " />
      <p><strong>Description:</strong> {product.description}</p>
      </div>
      
      <div className='flex flex-col leading-9 pt-10  '>
      {/* Product Category */}
      <p><strong>Category:</strong> {product.category}</p>
      
      {/* Product Brand */}
      <p><strong>Brand:</strong> {product.brandName}</p>
      
      {/* Product Price */}
      <p><strong>Price:</strong> ${product.price}</p>

      <p><strong>Condition:</strong> {product.condition}</p>
      </div>
      
    </div>
    </div>
    
  );
};

export default ProductDetail;
