import React, { useEffect, useState } from "react";
import Photogrid from "../Components/HomeDetails/Photogrid";
import MiddleSection from "../Components/HomeDetails/MiddleSection";
import Line from "../Components/HomeDetails/Line";
import Review from "../Components/HomeDetails/Review";
import Comments from "../Components/HomeDetails/Comments";
import Maps from "../Components/HomeDetails/Maps";
import Footer from "../Components/HomeDetails/Footer";
import { FaStar, FaMapMarkerAlt, FaShareAlt, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosInstance from "../AxiosConfig/instance";

const UpperPart = ({ house }) => {
  return (
    <>
      <div className="text-left font-semibold text-xl lg:text-3xl">
        <p>{house.name}</p>
      </div>

      <div className="hidden md:flex justify-between items-center font-semibold mt-1 text-sm lg:text-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="fond-semibold flex gap-1">
            <span className="">
              <FaStar />
            </span>
            <p>5</p>
          </div>
          <p className="underline">54 reviews .</p>

          <span className="mb-3">
            {" "}
            <FaMapMarkerAlt />
          </span>
          <p className="font-normal">Superhost</p>
          <p className="underline">{house.address}</p>
        </div>

        <div className="flex items-center gap-5 mr-6">
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <FaShareAlt />

            <p className="mb-1 underline">share</p>
          </div>
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <FaHeart color="black" />

            <p className="mb-1 underline">
              <button>WishList!</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeDetails = () => {
  const [house, setHouse] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/houses/${id}`)
      .then((res) => {
        setHouse(() => res.data.data.house);
      })
      .catch(() => navigate(-1));
  }, [id]);

  return (
    <div className="p-2">
      <div className="md:px-20 mt-9">
        <UpperPart house={house} />

        <div className="mt-5 ">
          <Photogrid images={house.images} />
        </div>

        <div className="">
          {Object.keys(house).length > 0 && <MiddleSection house={house} />}
        </div>

        <div className="w-full h-[1px] bg-gray-500 mt-24"></div>

        <div className="mt-10 p-2 ">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <h1>
              <span className="">
                <FaStar size={20} />
              </span>
              4.7
            </h1>
            <p> 3 reviews</p>
          </div>
          <div className="mt-5">
            <Review />
          </div>
          <div className="w-full h-[1px] bg-gray-500 mt-24"></div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2  md:gap-x-10">
            <Comments />

            <Comments />

            <Comments />
          </div>

          <div className="mt-9">
            <Line />
          </div>

          <div className="w-full p-0 md:p-8 mt-9 overflow-hidden">
            <h1 className="text-black text-xl font-semibold text-left">
              Where you’ll be
            </h1>
            <div className="mt-6">
              <Maps />
            </div>
          </div>

          <div className="text-left mt-3 flex flex-col gap-3">
            <p className="font-bold">Gyza</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              porro ullam a quisquam vero rem aliquid ea. Ipsam facere iste unde
              error quam est, exercitationem, iusto architecto excepturi soluta
              eius.
            </p>
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
