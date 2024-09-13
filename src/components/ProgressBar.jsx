import React from "react";

const ProgressBar = ({ progress }) => {
  const progressColor = progress === 100 ? "bg-blue-500" : "bg-purple-500";

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between"></div>
        <div className="flex">
          <div
            className={`relative flex-grow flex items-center rounded-full overflow-hidden ${progressColor} h-2`}
          >
            <div
              style={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
