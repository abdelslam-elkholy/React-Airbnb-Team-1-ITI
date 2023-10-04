import React from "react";
import "./Trips.css";
import { IoIosAirplane } from "react-icons/io";
import { FaPlaneCircleXmark } from "react-icons/fa6";

const Trips = () => {
  return (
    <>
      <div className="trips">
        <div className="container p-5 ">
          <div className="ticketContainer">
            <div className="ticket">
              <div className="ticketTitle px-5 pt-4 d-flex justify-content-between">
                <div className="text-center col-lg-2 col-md-2 col-3 d-flex flex-column">
                  <h2 className="mb-1">DUB</h2>
                </div>
                <div className="d-flex align-items-center col-lg-8 col-md-8 col-6">
                  <div className="progressTrip ">
                    <div className="circleProgressTrip "></div>
                  </div>
                  <div className="lineProgressTrip"></div>
                  <div>
                    <IoIosAirplane color="rgb(255, 56, 92)" className="mx-2" />
                  </div>
                  <div className="lineProgressTrip"></div>
                  <div className="progressTrip ">
                    <div className="circleProgressTrip "></div>
                  </div>
                </div>
                <div className="text-center col-lg-2 col-md-2 col-3 d-flex flex-column">
                  <h2 className="mb-1">YVR</h2>
                </div>
              </div>
              <div className="ticketTitle px-5 pt-4 d-flex justify-content-between text-center">
                <div className="col-lg-2 col-md-2 col-3">
                  <h6 className="text-secondary">Depart</h6>
                  <h6>10:00AM</h6>
                </div>
                <div className="col-lg-1 col-md-2 col-3">
                  <div className="circleProgressTripGreen"></div>
                  <h6>Direct</h6>
                  <h6 className="text-secondary">8hrs 30m</h6>
                </div>
                <div className="col-lg-2 col-md-2 col-3">
                  <h6 className="text-secondary">Arrive</h6>
                  <h6>18:30AM</h6>
                </div>
              </div>
              <div className="ticketRip">
                <div className="circleLeft"></div>
                <div className="ripLine"></div>
                <div className="circleRight"></div>
              </div>
              <div className="ticketSubDetail px-5 pb-4 ticketTitle d-flex justify-content-between text-center">
                <div className="col-lg-2 col-md-2 col-3">
                  <button class="tripBtn">
                    Cancel Trip
                    <FaPlaneCircleXmark className="planeOff" />
                  </button>
                </div>
                <div className="col-lg-2 col-md-2 col-2">
                  <h4>$500</h4>
                </div>
              </div>
            </div>
            <div className="ticketShadow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
