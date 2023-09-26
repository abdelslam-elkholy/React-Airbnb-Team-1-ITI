import React from "react";

import Header from "./Header";
import Workspace from "./Workspace";
import Line from "./Line";

import Offers from "./Offers";
import DateCard from "./DateCard";

import { BsFillKeyboardFill } from "react-icons/bs";

const MiddleSection = ({ house }) => {
  return (
    <div className="w-full flex md-flex-col ">
      <div className="w-full md:w-[60%] h-auto pr-24 pl-2 pt-10    scrollbar-hide">
        <div className="">
          <Header house={house} />

          <Line />
        </div>

        <div className="mt-9">
          <Workspace />
          <Line />
        </div>

        <div className="mt-7 flex flex-col gap-3 text-left">
          <img src="/images/aircover.jpg" alt="" className="w-[120px]" />
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <p className=" text-[17px] font-semibold underline">Learn more</p>
        </div>

        <div className="mt-9">
          <Line />
        </div>

        <div className="mt-7 flex flex-col gap-5 text-left">
          <p>{house.description}</p>
          <p className=" text-[17px] font-semibold underline">Learn more</p>
        </div>

        <div className="mt-9">
          <Line />
        </div>

        <div className="mt-9">
          <Offers />
        </div>

        <div className="mt-10">
          <Line />
        </div>
      </div>

      <div className="w-[40%]  md:mt-10  md:pl-14   ">
        <DateCard house={house} />
      </div>
    </div>
  );
};

export default MiddleSection;
