import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To capture product ID from the URL
import axios from 'axios'; // To fetch product data from the API

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the product data when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://advert-api-ccul.onrender.com/adverts/${id}`); // Fetch product by ID
        setProduct(response.data); // Set the product data
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error fetching product details.');
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProduct(); // Call the function to fetch product
  }, [id]); // Re-run this effect if the product ID changes

  // Show loading message while the data is being fetched
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // Show error message if there's an error
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // If no product is found, display a message
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Display product details
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.image || 'default-image-url'} alt={product.title} className="w-full h-auto mb-4" />
      <p className="text-xl mb-2"><strong>Category:</strong> {product.category}</p>
      <p className="text-xl mb-2"><strong>Brand:</strong> {product.brandName}</p>
      <p className="text-xl mb-2"><strong>Price:</strong> ${product.price}</p>
      <p className="text-lg mb-4"><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;
