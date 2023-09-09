import React from "react";

import { GrApps } from "react-icons/gr";

const Photogrid = () => {
  return (
    <div className=" h-90 relative">
      <div className="w-full flex h-90 md:flex-col ">
        <div className=" h-90 w-1/2 md:w-full md:m-2">
          <img
            src="/images/home5.jpg"
            alt=""
            className="h-full w-full  rounded-l-2xl object-fill hover:brightness-75 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 md:w-full gap-4  overflow-hidden px-4 hover:brightness-75 cursor-pointer ">
          <img
            src="/images/home6.jpg"
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer "
          />
          <img
            src="/images/home7.jpg"
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer"
          />
          <img
            src="/images/home8.jpg"
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer "
          />
          <img
            src="/images/home9.jpg"
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute z-10 gap-2 border bottom-6 right-16 px-4 py-2 bg-white text-black font-semibold rounded-md cursor-pointer items-center flex">
        <span className="mb-3">
          <GrApps />
        </span>
        <p>View all Pictures</p>
      </div>
    </div>
  );
};

export default Photogrid;
