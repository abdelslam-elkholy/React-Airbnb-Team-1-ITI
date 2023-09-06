import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-left">
        <p className="text-2xl font-semibold text-[#20262E]">
          Farm stay hosted by
        </p>
        <p className=" text-[17px] text-gray-700">
          5 guests . 2bedrooms . 3beds . 2bathrooms
        </p>
      </div>
      <div className="ml-20">
        <img
          src="/images/memes.jpeg"
          alt=""
          className="h-[50px] w-[50px] rounded-full object-cover ml-10"
        />
      </div>
    </div>
  );
};

export default Header;
