import React from "react";
import { Link } from "react-router-dom";

const Button = ({ imageSrc, text, link, subtext, bgclass }) => {
  return (
    <Link
      to={link}
      className={`flex md:flex-col lg:flex-row items-center gap-3 p-4 rounded-lg ${bgclass}`}
    >
      <div className="flex items-center gap-4">
        <img
          src={imageSrc}
          alt={text}
          className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">{text}</span>
          <p className="text-black text-sm">{subtext}</p>
        </div>
      </div>
    </Link>
  );
};

export default Button;
