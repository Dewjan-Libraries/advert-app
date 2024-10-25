// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { apiGetAdDetail } from "../../services/auth";

// import { Link, useParams } from "react-router-dom";

// const AdDetail = () => {
//   const { id } = useParams();
//   const [advert, setadvert] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const getAdDetail = async () => {
//       try {
//         const response = await apiGetAdDetail(id);
//         // const response = await apiGetAdDetail.get(/adverts/${id});
//         // console.log(response.data);
//         setadvert(response.data);
//         setLoading(false);
//       } catch (err) {
//         // console.log(err)
//         setError("Error fetching data.");
//         setLoading(false);
//       }
//     };
//     getAdDetail();
//   }, [id]);
  

//   if (loading) {
//     return <div>please be patient advert is loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!advert) {
//     return <div>sorry no advert to display</div>;
//   }

//   return (
//     <div className="h-full mx-auto p-4">
//       <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
//         <img
//           className="mb-6 max-w-md"
//           src={`https://savefiles.org/${advert.image}?shareable_link=449`}
//           alt={advert.title}
//         />
//         <h2 className="text-2xl font-semibold">Product: {advert.title}</h2>
//         <p className="text-2xl font-semibold">Category: {advert.category}</p>
//         <p className="text-2xl font-semibold">Condition: {advert.condition}</p>
//         <p className="text-2xl font-semibold">Price: $ {advert.price}</p>
//         <p className="text-2xl font-semibold">Brand: {advert.brandName}</p>
//         <p className="text-2xl font-semibold">
//           Description: {advert.description}
//         </p>
//         <div className="m-6 space-x-10 ">      
 
//         <Link to={"/edit/:id"}>
//           <button
//             className="lg:m-10  text-2xl p-2 font-bold rounded-md bg-green-400"
//             type="submit"
//           >
//             Edit
//           </button>
//         </Link>
//         <button
//           onClick={() => handleDeleteAd(advert.id)}
//           className=" lg:m-10  text-2xl p-2 font-bold rounded-md bg-green-400"
//           type="submit"
//         >
//           Delete
//         </button>
//       </div>
//       </div>
      
//     </div>
  
//   );
// };

// export default AdDetail;

import React, { useEffect, useState } from "react";
import { apiGetAdDetail, apiDeleteAd } from "../../services/auth";
import { Link, useParams, useNavigate } from "react-router-dom";


const AdDetail = () => {
    const { id } = useParams();
    const [advert, setAdvert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getAdDetail = async () => {
            setLoading(true);
            try {
                const response = await apiGetAdDetail(id);
                setAdvert(response.data);
                setLoading(false);
            } catch (err) {
                setError("Error fetching data.");
                setLoading(false);
            }
        };
        getAdDetail();
    }, [id]);

    const handleDeleteAd = async (id) => {
        await apiDeleteAd(id);
        navigate('/myads'); // Redirect after deletion
    };

    if (loading) {
        return <div className="text-center py-6">Please be patient, advert is loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-6">{error}</div>;
    }

    if (!advert) {
        return <div className="text-center py-6">Sorry, no advert to display</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <img
                className="mb-6 max-w-md mx-auto rounded-md"
                src={`https://savefiles.org/${advert.image}?shareable_link=449`}
                alt={advert.title}
            />
            <h2 className="text-1xl font-bold text-center mb-4">{advert.title}</h2>
            <p className="text-xl font-semibold">Category: {advert.category}</p>
            <p className="text-xl font-semibold">Condition: {advert.condition}</p>
            <p className="text-xl font-semibold">Price: ${advert.price}</p>
            <p className="text-xl font-semibold">Brand: {advert.brandName}</p>
            <p className="text-xl mt-4">Description: {advert.description}</p>
            <div className="flex justify-between mt-6">
                <Link to={`/edit/${advert.id}`}>
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
                        Edit
                    </button>
                </Link>
                <button
                    onClick={() => handleDeleteAd(advert.id)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AdDetail;