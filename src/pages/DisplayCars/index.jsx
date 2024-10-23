// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios
// import { IoGrid } from "react-icons/io5";
// import { FaList } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { IoArrowBackCircleOutline } from "react-icons/io5";


// const ProductList = () => {
//   const navigate = useNavigate();
//   // State for storing products fetched from the API
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);  

//   // State for filters
//   const [filters, setFilters] = useState({
//     search: '',
//     category: '',
//     brandName: '',
//     price: ''
//   });

//   // State to control view mode (grid or list)
//   const [isGridView, setIsGridView] = useState(true);
  

//   // Fetch data from the API on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://advert-api-ccul.onrender.com/adverts'); 
//         setProducts(response.data); 
//         setFilteredProducts(response.data); 
//         setLoading(false); 
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false); 
//       }
//     };

//     fetchProducts(); 
//   }, []);

//   // Handle input changes for filters
//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Function to filter products when the user clicks search
//   const handleSearch = () => {
//     let updatedProducts = products;

//     // Filter by search query
//     if (filters.search) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.title.toLowerCase().includes(filters.search.toLowerCase())
//       );
//     }

//     // Filter by brand
//     if (filters.brandName) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.brandName === filters.brandName
//       );
//     }

//     // Filter by category
//     if (filters.category) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.category === filters.category
//       );
//     }

//     // Filter by max price
//     if (filters.price) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.price <= parseFloat(filters.price)
//       );
//     }

//     // Update the displayed products
//     setFilteredProducts(updatedProducts);
//   };

//   // Loading state
//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-1/4 p-4 md:p-8 sm:p-2 bg-lime-50">
        

//         {/* Search bar */}
//         <div className="mb-4">
//           <input
//             type="text"
//             name="search"
//             value={filters.search}
//             onChange={handleInputChange}
//             placeholder="Search..."
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <select
//             name="category"
//             value={filters.category}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             {/* Category filter */}
//             <option value="">All Categories</option>
//             <option value="Vehicles">Vehicles</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Fashion">Fashion</option>
//             <option value="Real Estate">Real Estate</option>
//           </select>
//         </div>

//         {/* Brand dropdown */}
//         <div className="mb-4">
//           <select
//             name="brand"
//             value={filters.brandName}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">All Brands</option>
//             <option value="Toyota">Toyota</option>
//             <option value="Apple">Apple</option>
//             <option value="Samsung">Samsung</option>
//             <option value="Adidas">Adidas</option>
//             <option value="Honda">Honda</option>
//           </select>
//         </div>

//         {/* Max price filter */}
//         <div className="mb-4">
//           <input
//             type="number"
//             name="price"
//             value={filters.price}
//             onChange={handleInputChange}
//             placeholder="Enter Price"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Search Button */}
//         <button
//           onClick={handleSearch}
//           className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-600"
//         >
//           Search
//         </button>
//       </div>

//       {/* Product view section */}
//       <div className="w-3/4 p-4">
//         <div className="flex justify-between items-center mb-4">
//         <Link className="font-bold text-3xl" to={"/"} ><IoArrowBackCircleOutline /></Link>
//         <h2 className='items-center justify-center font-bold text-3xl'>ALL ADVERTS</h2>

//           {/* Toggle Buttons for Grid and List */}
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setIsGridView(true)}
//               className={`p-2 rounded ${isGridView ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
//             >
//               <IoGrid />
//             </button>
//             <button
//               onClick={() => setIsGridView(false)}
//               className={`p-2 rounded ${!isGridView ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
//             >
//               <FaList />
//             </button>
//           </div>
//         </div>

//         {/* Product Display */}
//         {filteredProducts.length > 0 ? (
//           <div className={isGridView ? 'grid grid-cols-3 gap-4' : 'space-y-4'}>
//             {filteredProducts.map(product => (
//               <div
//                 key={product.id}
//                 className={`border p-4 rounded ${isGridView ? '' : 'flex items-center space-x-4'}`}
//               >
//                 <img
//                   src={product.image || 'default-image-url'} // Display the image or a default one
//                   alt={product.title}
//                   className={isGridView ? 'mb-4' : 'w-16 h-16'}
//                 />
//                 <div>
//                   <h3 className="font-bold mb-2">{product.title}</h3>
//                   <p>Brand: {product.brandName}</p>
//                   <p>Price: ${product.price}</p>
//                   <p>Category: {product.category}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No products found matching your criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { Link, useSearchParams } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ProductList = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [loading, setLoading] = useState(true); // Loading state

  const [filterValues, setFilterValues] = useState({
    search: '',
    category: '',
    brandName: '',
    price: ''
  }); // Local filter state

  const [isGridView, setIsGridView] = useState(true); // Control grid or list view

  // Fetch the URL parameters for search and category from the navbar
  const [searchParams] = useSearchParams();

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts`);
        setProducts(response.data); // Store all products
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts(); // Fetch products on mount
  }, []);

  // Filter products based on search params (from URL) and sidebar filters
  useEffect(() => {
    const searchQuery = searchParams.get('search') || ''; // Get search from URL
    const selectedCategory = searchParams.get('category') || ''; // Get category from URL

    let updatedProducts = products;

    // Filter by search query (URL or sidebar)
    if (searchQuery || filterValues.search) {
      const searchTerm = filterValues.search || searchQuery;
      updatedProducts = updatedProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category (URL or sidebar)
    if (selectedCategory || filterValues.category) {
      const category = filterValues.category || selectedCategory;
      updatedProducts = updatedProducts.filter(product =>
        product.category === category
      );
    }

    // Filter by brand (sidebar)
    if (filterValues.brandName) {
      updatedProducts = updatedProducts.filter(product =>
        product.brandName === filterValues.brandName
      );
    }

    // Filter by max price (sidebar)
    if (filterValues.price) {
      updatedProducts = updatedProducts.filter(product =>
        product.price <= parseFloat(filterValues.price)
      );
    }

    // Update the filtered products
    setFilteredProducts(updatedProducts);
  }, [products, searchParams, filterValues]); // Trigger filter when products or filters change

  // Loading state
  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="flex">
      {/* Sidebar with filters */}
      <div className="w-1/4 p-4 md:p-8 sm:p-2 bg-lime-50">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Search by Title */}
        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search by title..."
            className="w-full p-2 border border-gray-300 rounded"
            value={filterValues.search}
            onInput={(e) => setFilterValues({ ...filterValues, search: e.target.value })}
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
          </select>
        </div>

        {/* Filter by Max Price */}
        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Max Price"
            className="w-full p-2 border border-gray-300 rounded"
            value={filterValues.price}
            onInput={(e) => setFilterValues({ ...filterValues, price: e.target.value })}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={() => setFilteredProducts(filteredProducts)} // Apply the filters
          className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>

      {/* Product view section */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <Link className="font-bold text-3xl" to={"/"} >
            <IoArrowBackCircleOutline />
          </Link>
          <h2 className="items-center justify-center font-bold text-3xl">
            ALL ADVERTS
          </h2>

          {/* Toggle Buttons for Grid and List */}
          <div className="flex space-x-2">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded ${isGridView ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
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
                className={`border p-4 rounded ${isGridView ? '' : 'flex items-center space-x-4'}`}
              >
                <img
                  src={`https://savefiles.org/secure/uploads/19355?shareable_link=449`} // Display the image or fallback to a default
                  alt={product.title}
                  className={isGridView ? 'mb-4' : 'w-80 h-40'}
                />
                <div>
                  <h3 className="font-bold mb-2">{product.title}</h3>
                  <p>Brand: {product.brandName}</p>
                  <p>Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
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
