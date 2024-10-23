import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const MyAdPage = () => {
  return (
    <div className="flex  bg-green-100">
      <Sidebar />
      <div className="h-[100vh] w-[100vw] lg-w-[100vw] p-10 bg-green-100">
        {/* <Link to="/vendor-dashboard" className="rounded-lg bg-slate-100 p-2" >DashBoard icon</Link> */}

        <div className="grid grid-cols-2 w-[70%] h-[200px] border-black ml-48 bg-white">
          <img className="p-2" src="" alt="item" />
          <div className=" leading-10 p-5">
            <h1>Title:</h1>
            <p>Category:</p>
            <p>Price:</p>
          </div>
          <div className="">
            <button className=" m-10 p-2 rounded-lg bg-green-400" type="submit">
              edit
            </button>
            <button className=" m-10 rounded-lg p-2 bg-green-400" type="submit">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdPage;

{
  /* <div>
<h1>{item.title}</h1>
<p>Created At:{item.time?.name}</p>
<p>Price:{item.price?.name}</p>
</div> */
}
