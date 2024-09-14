import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="flex justify-between">
        {[1, 2, 3].map((box) => (
          <div
            key={box}
            className={`w-1/3 h-2 mx-1 rounded-full ${
              step >= box ? "bg-blue-500" : "bg-[#EEDDFC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
