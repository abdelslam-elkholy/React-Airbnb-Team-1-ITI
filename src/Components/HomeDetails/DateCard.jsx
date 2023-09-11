import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateCard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Make a Reservation</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Check-in Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          excludeDates={[
            new Date("2023-09-12"),
            new Date("2023-09-13"),
            new Date("2023-09-14"),
          ]}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          placeholderText="Select check-in date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Check-out Date
        </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          excludeDates={[
            new Date("2023-09-12"),
            new Date("2023-09-13"),
            new Date("2023-09-14"),
          ]}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          placeholderText="Select check-out date"
        />
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!startDate || !endDate}
      >
        Book Now
      </button>
    </div>
  );
};

export default DateCard;
