import React from "react";
import Picker from "./Picker";
import { useState } from "react";
import Dropdownbtn from "./Dropdownbtn";
import Line from "./Line";
import MainCalander from "./MainCalander";

const DateCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const today = new Date();

  return (
    <div className="px-8 py-6 border w-[440px] shadow-lg rounded-lg">
      <div className="flex items-center gap-3">
        <p className="text-[25px] font-semibold text-gray-500 line-through">
          $1000
        </p>
        <p className="text-[25px] font-semibold text-gray-800 ">$1000</p>
        <p>night</p>
        <p>
          <span>
            <ion-icon name="star"></ion-icon>
          </span>
          4.7
        </p>
        <p className="underline text-gray-500 font-semibold">3 reviews</p>
      </div>

      <div className="w-full border border-gray-400 rounded-lg p-2 mt-5">
        <div
          className="flex justify-between  cursor-pointer text-sm font-semibold"
          onClick={() => setShowModal(true)}
        >
          <MainCalander />

          <div className="mt-3">
            <div className="w-full h-[1px] bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between ">
            <p className="">Guests</p>
            <span className="mt-2">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div className="border mt-4 p-3 rounded-md bg-gradient-to-r from-pink-600 to-rose-700 cursor-pointer">
          <p className="font-semibold text-white">Reserve</p>
        </div>
        <p className="mt-3">You won't be charged yet</p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 underline">100X 5 nights</p>
            <p className="font-semibold">500</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 underline">Airbnb service fee</p>
            <p className="font-semibold">$22,942</p>
          </div>
          <div className="mt-4">
            <Line />
          </div>
          <div className="mt-5 flex justify-between font-semibold">
            <p>Total before Taxes</p>
            <p>500</p>
          </div>
          <div className="h"></div>
        </div>

        <div />
      </div>
    </div>
  );
};

export default DateCard;
