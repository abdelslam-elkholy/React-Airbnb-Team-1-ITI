import React from "react";

import { GrApps } from "react-icons/gr";

const Photogrid = () => {
  return (
    <div className=" h-90 relative">
      <div className=" flex ">
        <div className=" h-90 w-full lg:w-[65%]">
          <img
            src="/images/home5.jpg"
            alt=""
            className="h-full   rounded-l-2xl object-fill hover:brightness-75 cursor-pointer"
          />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-2  overflow-hidden px-2 hover:brightness-75 cursor-pointer ">
          <img
            src="/images/home6.jpg"
            alt=""
            className="h-48 w-96  hover:brightness-75 cursor-pointer "
          />
          <img
            src="/images/home7.jpg"
            alt=""
            className="h-48 w-96  hover:brightness-75 cursor-pointer"
          />
          <img
            src="/images/home8.jpg"
            alt=""
            className="h-48 w-96  hover:brightness-75 cursor-pointer "
          />
          <img
            src="/images/home9.jpg"
            alt=""
            className="h-48 w-96  hover:brightness-75 cursor-pointer"
          />
        </div>
      </div>
      <div className="hidden md:absolute z-10  border bottom-6 right-16 px-3 pt-1 bg-white text-black font-semibold rounded-md cursor-pointer flex">
        <span className="m-1">
          <GrApps />
        </span>
        <p>View all Pictures</p>
      </div>
    </div>
  );
};

export default Photogrid;
