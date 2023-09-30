import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/instance";

const DateCard = ({ house }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const reservedDates = house.unavailableDates.map((date) => new Date(date));
  const taxes = 0.1;
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    if (startDate && endDate) {
      const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const subtotal = house.price * nights;
      const total = subtotal + subtotal * taxes;
      return total.toFixed(2);
    }
    return 0;
  };

  const goToReservation = () => {
    navigate("/reservation");
  };
  return (
    <div className=" w-full max-w-md p-4 bg-white rounded shadow-md flex  md:flex-col">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price per Night
        </label>
        <span className="text-gray-700">{house.price}$</span>
      </div>
      <div className="mb-4 flex">
        <div className="mr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Check-in Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholderText="Select check-in date"
            excludeDates={reservedDates}
          />
        </div>
        <div className="ml-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Check-out Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            // selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholderText="Select check-out date"
            excludeDates={reservedDates}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Number of Guests
        </label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          min={1}
          max={house.guestNumber}
        />
      </div>

      {startDate && endDate && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Total Price
          </label>
          <span className="text-gray-700">{`$${calculateTotalPrice()}`}</span>
        </div>
      )}
      <button
        className="w-1/2 mx-auto bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!startDate || !endDate}
        onClick={goToReservation}
      >
        Reserve
      </button>
    </div>
  );
};

export default DateCard;
