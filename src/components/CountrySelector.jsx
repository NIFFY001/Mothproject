// CountrySelector.js
import React from "react";
import Select from "react-select";
import Flag from "react-world-flags";

const countries = [
  { value: "nigeria", label: "Nigeria", flag: "NG" },
  // Add more countries here
];

const customSingleValue = ({ data }) => (
  <div className="flex items-center">
    <Flag
      code={data.flag}
      alt={data.label}
      style={{ width: 20, height: 15, marginRight: 10 }}
    />
    <span>{data.label}</span>
  </div>
);

const CountrySelector = (props) => (
  <Select
    {...props}
    options={countries}
    getOptionLabel={(option) => (
      <div className="flex items-center">
        <Flag
          code={option.flag}
          alt={option.label}
          style={{ width: 20, height: 15, marginRight: 10 }}
        />
        <span>{option.label}</span>
      </div>
    )}
    components={{ SingleValue: customSingleValue }}
    className="basic-single"
    classNamePrefix="select"
  />
);

export default CountrySelector;
