import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiGetAdDetail } from "../../services/auth";
import { apiDeleteAd } from "../../services/auth";

import { Link, useParams } from "react-router-dom";

const AdDetail = () => {
  const { id } = useParams();
  const [advert, setadvert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleDeleteAd = async (id) => {

    if (window.confirm('Are you sure you want to delete this advert?')) {
      try {
        await apiDeleteAd(id); // Assuming you have a delete API function
        // Add logic to handle successful deletion, like redirecting or updating the state
        alert('Advert deleted successfully');
      } catch (err) {
        console.error('Failed to delete advert:', err);
        alert('Error deleting advert.');
      }
    }

  }

  useEffect(() => {
    const getAdDetail = async () => {
      try {
        const response = await apiGetAdDetail(id);
        // const response = await apiGetAdDetail.get(`/adverts/${id}`);
        // console.log(response.data);
        setadvert(response.data);
        setLoading(false);
      } catch (err) {
        // console.log(err)
        setError("Error fetching data.");
        setLoading(false);
      }
    };
    getAdDetail();
  }, [id]);

  if (loading) {
    return <div>please be patient advert is loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!advert) {
    return <div>sorry no advert to display</div>;
  }

  return (
    <div className="h-full mx-auto p-4">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <img
          className="mb-6 max-w-md"
          src={`https://savefiles.org/${advert.image}?shareable_link=449`}
          alt={advert.title}
        />
        <h2 className="text-2xl font-semibold">Product: {advert.title}</h2>
        <p className="text-2xl font-semibold">Category: {advert.category}</p>
        <p className="text-2xl font-semibold">Condition: {advert.condition}</p>
        <p className="text-2xl font-semibold">Price: $ {advert.price}</p>
        <p className="text-2xl font-semibold">Brand: {advert.brandName}</p>
        <p className="text-2xl font-semibold">
          Description: {advert.description}
        </p>
        <div className="m-6 space-x-10 ">
        <Link to={`/edit/${advert.id}`}>
          <button
            className="lg:m-10  text-2xl p-2 font-bold rounded-md bg-green-400"
            type="submit"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDeleteAd(advert.id)}
          className=" lg:m-10  text-2xl p-2 font-bold rounded-md bg-green-400"
          type="submit"
        >
          Delete
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default AdDetail;
