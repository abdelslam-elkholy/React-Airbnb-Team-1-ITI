import React from "react";
import SecondNav from "../components/SecondNav";
import Photogrid from "../components/Photogrid";
import MiddleSection from "../components/MiddleSection";
import LoadingBar from "react-top-loading-bar";
import Line from "../components/Line";
import Review from "../components/Review";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "../components/Comments";
import Maps from "../components/Maps";
import Footer from "../components/Footer";

const HomeDetails = () => {
  return (
    <div className="">
      <LoadingBar color="#f11946" progress={100} loaderSpeed={500} />
      <SecondNav />
      <div className="px-40 mt-9">
        <div className="text-left font-semibold text-[26px]">
          <p>Hotel 1</p>
        </div>

        <div className="flex justify-between items-center font-semibold mt-1">
          <div className="flex items-center justify-center space-x-2">
            <div className="fond-semibold flex gap-1">
              <span className=" ">
                <ion-icon name="star"></ion-icon>
              </span>
              <p>5</p>
            </div>
            <p className="underline">54 reviews .</p>
            <span className="mt-1">
              <ion-icon name="pin"></ion-icon>
            </span>
            <p className="font-normal">Superhost</p>
            <p className="underline">
              23-haram
              <span> Gyza</span>
            </p>
          </div>

          <div className="flex items-center gap-5 mr-6">
            <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
              <span>
                <ion-icon name="share-outline"></ion-icon>
              </span>
              <p className="mb-1 underline">share</p>
            </div>
            <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
              <span className="text-red-600">
                <ion-icon name="heart"></ion-icon>
              </span>
              <p className="mb-1 underline">
                <button>WishList!</button>
                <ToastContainer
                  theme="dark"
                  autoClose={7000}
                  hideProgressBar={true}
                  position="top-center"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <Photogrid />
        </div>

        <div className="w-full h-[10px] "></div>

        <div className="">
          <MiddleSection />
        </div>

        <div className="w-full h-[1px] bg-gray-500 mt-24"></div>

        <div className="mt-10 p-2 ">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <h1>
              <span className="">
                <ion-icon name="star"></ion-icon>
              </span>
              4.7
            </h1>
            <p> 3 reviews</p>
          </div>
          <div className="mt-5">
            <Review />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-10">
            <Comments />
            <Comments />
            <Comments />
          </div>

          <div className="mt-9">
            <Line />
          </div>

          <div className="w-full h-[500px] mt-9 overflow-hidden">
            <h1 className="text-black text-[22px]  font-semibold text-left">
              Where you’ll be
            </h1>
            <div className="mt-6">
              <Maps />
            </div>
          </div>

          <div className="text-left mt-3 flex flex-col gap-3">
            <p className="font-bold">Gyza</p>
            <p>{item.desc}</p>
            <p>
              The HATCH is directly on HIN KONG BEACH FRONT! Ocean views, on the
              beach - sandy feet very welcome!!
            </p>
            <p className="underline font-semibold">Show More</p>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default HomeDetails;
