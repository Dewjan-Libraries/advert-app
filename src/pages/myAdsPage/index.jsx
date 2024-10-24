import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiGetAd } from "../../services/auth";
import { Link } from "react-router-dom";

const MyAdverts = () => {
  const handleSubmit = async (event) => event.preventDefault();
    
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  
  // navigate("/login")

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
      
        const vendorAdverts = await apiGetAd()
        
        setAdverts(vendorAdverts.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load adverts.");
        setLoading(false);
      }
    };

  
    if (token) {
      fetchAdverts();
    }
  }, [token]);

  if (loading) {
  
    return <div>Loading adverts...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (adverts.length === 0) {
    return <div>No adverts found.</div>;
  }

  return (
    <div className=" bg-green-100">
      {/* <Sidebar /> */}
    {/* <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">  */}
      <h1 className="text-4xl flex justify-center font-bold p-10 ">My Products</h1>
      <div className="grid grid-cols-3 gap-5 p-5">
        {
        adverts.map((advert, index) => (
      <Link to={`/myaddetail/${advert.id}`} key={index}>
      <div onSubmit={handleSubmit} key={index} className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-4 glass">
             <img className="p-2 border-2"
              src={`https://savefiles.org/${advert.image}?shareable_link=449`}
              alt={advert.title}
           
            />
            <h2 className="text-2xl font-semibold">Product: {advert.title}</h2>
            <p className="text-2xl font-semibold">Category: {advert.category}</p>
            <p className="text-2xl font-semibold">Condition: {advert.condition}</p>
            <p className="text-2xl font-semibold">Price: $ {advert.price}</p>
            <p className="text-2xl font-semibold">Brand: {advert.brandName}</p>
            <p className="text-2xl font-semibold">Description: {advert.description}</p>

           
          </div>
      </Link>
          
))}
      </div>
    </div>
  
  );
};

export default MyAdverts;


 /* <Link to={`/edit/${ad.id}`}> */
//             <Link to="/edit">
//             <button className="lg:m-10 p-2 font-bold rounded-lg bg-green-400" type="submit">
//               Edit
//             </button>
//             </Link>
//             <button  onClick={() => handleDeleteAd(ad.id)} className=" lg:m-10 rounded-lg p-2 bg-green-400" type="submit">
//               delete
//             </button>
//           </div>