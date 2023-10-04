import React, { useEffect, useState } from "react";
import "./Trips.css";

import { FcHome } from "react-icons/fc";
import { TbHomeOff } from "react-icons/tb";
import instance from "../../AxiosConfig/instance";

const Trips = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    instance.get("/reservations/me").then((res) => {
      setReservations(res.data.data.reservations);
      console.log(res.data.data.reservations);
    });
  }, []);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    return inputDate.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="trips">
        <div className="container p-5 ">
          {reservations.map((reservation) => {
            return (
              <div className="ticketContainer my-4">
                <div className="ticket">
                  <div className="ticketTitle px-5 pt-4 d-flex justify-content-between">
                    <div className="text-center col-lg-2 col-md-2 col-3 d-flex flex-column">
                      <h2 className="mb-1">{reservation.houseId.name}</h2>
                    </div>
                    <div className="d-flex align-items-center col-lg-8 col-md-8 col-6">
                      <div className="progressTrip ">
                        <div className="circleProgressTrip "></div>
                      </div>
                      <div className="lineProgressTrip"></div>
                      <div>
                        <FcHome color="rgb(255, 56, 92)" className="mx-2" />
                      </div>
                      <div className="lineProgressTrip"></div>
                      <div className="progressTrip ">
                        <div className="circleProgressTrip "></div>
                      </div>
                    </div>
                    <div className="text-center col-lg-2 col-md-2 col-3 d-flex flex-column">
                      <h2 className="mb-1">
                        {(new Date(reservation.checkOut) -
                          new Date(reservation.checkIn)) /
                          1000 /
                          60 /
                          60 /
                          24}
                        /night
                      </h2>
                    </div>
                  </div>
                  <div className="ticketTitle px-5 pt-4 d-flex justify-content-between text-center">
                    <div className="col-lg-2 col-md-2 col-3">
                      <h6 className="text-secondary">Arrive</h6>
                      <h6>{formattedDate(reservation.checkIn)}</h6>
                    </div>
                    {/* <div className="col-lg-1 col-md-2 col-3">
                      <div className="circleProgressTripGreen"></div>
                      <h6>Direct</h6>
                      <h6 className="text-secondary">8hrs 30m</h6>
                    </div> */}
                    <div className="col-lg-2 col-md-2 col-3">
                      <h6 className="text-secondary">Depart</h6>
                      <h6>{formattedDate(reservation.checkOut)}</h6>
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
                        Cancel Reservation
                        <TbHomeOff className="planeOff" />
                      </button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2">
                      <h4>{reservation.price}</h4>
                    </div>
                  </div>
                </div>
                <div className="ticketShadow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trips;
