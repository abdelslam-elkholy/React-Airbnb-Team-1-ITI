import React from "react";

const Review = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-20">
      <div className="flex flex-col gap-1 md:gap-3 w-full md:w-[50%] font-semibold">
        <div className="flex  justify-between">
          <p>Cleanliness</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Communication</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Checkin</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-3 w-full  md:w-[50%] font-semibold">
        <div className="flex justify-between">
          <p>Accuracy</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Location</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Value</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>5.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
