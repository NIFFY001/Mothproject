import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import homebg from "/src/assets/homebg.png";

const BalanceDisplay = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "NIG", name: "Nigeria", flag: "🇳🇬" },

    // Add more countries as needed
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className=" p-4 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="bg-white border border-gray-300 rounded-2xl p-2"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-[#D46104] text-white rounded-2xl p-2 ml-2">
          Top Up +
        </button>
      </div>
      <div className="flex items-center mt-[70px]">
        <span className="text-2xl font-bold text-white">
          {balanceVisible ? "$50,344.00" : "***"}
        </span>
        <button
          onClick={toggleBalance}
          className="ml-2 text-gray-500 underline"
        >
          {balanceVisible ? <IoMdEye /> : <IoMdEyeOff />}
        </button>
      </div>
    </div>
  );
};

export default BalanceDisplay;
