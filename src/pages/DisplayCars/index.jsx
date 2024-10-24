import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const api = axios.create ({
  baseURL: import.meta.env.VITE_BASE_URL,
});

function ProductList() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const [filterValues, setFilterValues] = useState({
    search: '',
    category: '',
    brandName: '',
    price: ''
  }); // Local state for filter inputs

  const [isGridView, setIsGridView] = useState(true); 
  const navigate = useNavigate(); 
  const [searchParams] = useSearchParams(); 



  const fetchProducts = async () => {
    try {
      const response = await api.get('/adverts');
      setProducts(response.data); 
      setFilteredProducts(response.data); 
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }; 

  // Fetch the products when the component mounts
  useEffect(() => { 
    fetchProducts(); 
  }, []);

  // Apply filters when the search button is clicked
  const applyFilters = () => {
    let updatedProducts = products;

    // Apply search term filter
    if (filterValues.search) {
      updatedProducts = updatedProducts.filter(product =>
        product.title.toLowerCase().includes(filterValues.search.toLowerCase())
      );
    }

    // Apply category filter
    if (filterValues.category) {
      updatedProducts = updatedProducts.filter(product =>
        product.category === filterValues.category
      );
    }

    // Apply brand filter
    if (filterValues.brandName) {
      updatedProducts = updatedProducts.filter(product =>
        product.brandName.toLowerCase() === filterValues.brandName.toLowerCase()
      );
    }

    // Apply max price filter
    if (filterValues.price) {
      updatedProducts = updatedProducts.filter(product =>
        product.price <= parseFloat(filterValues.price)
      );
    }

    setFilteredProducts(updatedProducts); 
  };

  // Navigate to the ProductDetail page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="flex">
      {/* Sidebar with filters */}
      <div className="w-1/4 p-4 md:p-8 sm:p-2 bg-lime-50">
        {/* <h2 className="font-bold text-lg mb-4">Filters</h2> */}

        {/* Search by Title */}
        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search by title..."
            className="w-full p-2 border border-gray-300 rounded"
            // defaultValue={filterValues.search}
            value={filterValues.search}
            onChange={(e) => setFilterValues({ ...filterValues, search: e.target.value })}
          />
        </div>

        {/* Filter by Category */}
        <div className="mb-4">
          <select
            name="category"
            className="w-full p-2 border border-gray-300 rounded"
            value={filterValues.category}
            onChange={(e) => setFilterValues({ ...filterValues, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </div>

        {/* Filter by Brand */}
        <div className="mb-4">
          <select
            name="brand"
            className="w-full p-2 border border-gray-300 rounded"
            value={filterValues.brandName}
            onChange={(e) => setFilterValues({ ...filterValues, brandName: e.target.value })}
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Adidas">Adidas</option>
            <option value="Honda">Honda</option>
            <option value="Zara">Zara</option>
          </select>
        </div>

        {/* Filter by Max Price */}
        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder=" Price"
            className="w-full p-2 border border-gray-300 rounded"
            value={filterValues.price}
            onChange={(e) => setFilterValues({ ...filterValues, price: e.target.value })}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={applyFilters} 
          className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>

      {/* Product List View */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
        <Link className='text-4xl ' to={"/"}  ><IoArrowBackCircleOutline /></Link>
          <h2 className="font-bold text-3xl mb-4 justify-center text-center items-center">ALL ADVERTS</h2>

          {/* Toggle Buttons for Grid and List */}
          <div className="flex space-x-2">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2  rounded ${isGridView ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              <IoGrid />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded ${!isGridView ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Product Display */}
        {filteredProducts.length > 0 ? (
          <div className={isGridView ? 'grid grid-cols-3 gap-4' : 'space-y-4'}>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className={`border p-4 rounded ${isGridView ? '' : 'flex items-center space-x-4 cursor-pointer'}`}
                onClick={() => handleProductClick(product.id)} 
              >
                <img
                  src= {`https://savefiles.org/${product.image}?shareable_link=449`}
                  alt={product.title}
                  className={isGridView ? 'mb-4' : 'w-80 h-80'}
                />
                <div>
                  <h3 className="font-bold mb-2">{product.title}</h3>
                  <p>Category: {product.category}</p>
                  <p>Brand: {product.brandName}</p>

                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
