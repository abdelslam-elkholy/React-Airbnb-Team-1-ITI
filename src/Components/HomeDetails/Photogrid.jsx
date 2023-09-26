import React from "react";

import { GrApps } from "react-icons/gr";

const Photogrid = ({ images }) => {
  return (
    <div className=" h-90 relative ">
      {images && images.length > 0 && (
        <div className=" flex ">
          <div className=" h-90 w-full lg:w-[65%]">
            <img
              src={"http://localhost:3000/img/houses/" + images[0]}
              alt=""
              className="h-full   rounded-l-2xl object-fill hover:brightness-75 cursor-pointer"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2  overflow-hidden px-2 hover:brightness-75 cursor-pointer ">
            <img
              src={`http://localhost:3000/img/houses/${images[1]}`}
              alt=""
              className="h-48 w-96  hover:brightness-75 cursor-pointer "
            />
            <img
              src={`http://localhost:3000/img/houses/${images[2]}`}
              alt=""
              className="h-48 w-96  hover:brightness-75 cursor-pointer"
            />
            <img
              src={`http://localhost:3000/img/houses/${images[3]}`}
              alt=""
              className="h-48 w-96  hover:brightness-75 cursor-pointer "
            />
            <img
              src={`http://localhost:3000/img/houses/${images[0]}`}
              alt=""
              className="h-48 w-96  hover:brightness-75 cursor-pointer"
            />
          </div>
        </div>
      )}
      <div className="hidden md:flex md:absolute z-10  border md:bottom-6 md:right-6  px-1 lg:px-3 pt-1 bg-white text-black font-semibold rounded-md cursor-pointer  text-xs lg:text-sm">
        <span className="lg:m-1">
          <GrApps />
        </span>
        <p>View all Pictures</p>
      </div>
    </div>
  );
};

export default Photogrid;
