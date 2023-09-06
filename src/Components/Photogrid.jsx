import React from "react";

const Photogrid = () => {
  return (
    <div className="w-full h-[380px] relative">
      <div className="w-full flex h-[380px] ">
        <div className=" h-[380px] w-[45%] ">
          <img
            src=""
            alt=""
            className="h-full w-full  rounded-l-2xl object-fill hover:brightness-75 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2  gap-4  overflow-hidden px-4 hover:brightness-75 cursor-pointer ">
          <img
            src=""
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer "
          />
          <img
            src=""
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer"
          />
          <img
            src=""
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer "
          />
          <img
            src=""
            alt=""
            className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute z-10 gap-2 border bottom-6 right-16 px-4 py-2 bg-white text-black font-semibold rounded-md cursor-pointer items-center flex">
        <span className="mt-1">
          <ion-icon name="apps-outline"></ion-icon>
        </span>
        <p>View all Pictures</p>
      </div>
    </div>
  );
};

export default Photogrid;
