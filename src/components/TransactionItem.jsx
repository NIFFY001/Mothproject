import React from "react";

const TransactionItem = ({ time, name, amount, imgSrc, amountColor }) => {
  return (
    <div
      className={`flex justify-between items-center border  rounded-2xl p-4`}
    >
      <div className="flex gap-5 items-center">
        <div>
          <img src={imgSrc} className="w-[60px]" alt="Transaction Icon" />
        </div>
        <div className="text-black">
          <h3 className="mb-1">{name}</h3>
          <h2 class="text-gray-500">{time}</h2>
        </div>
      </div>
      <div>
        <h2 className={`text- ${amountColor}`}>${amount}</h2>
      </div>
    </div>
  );
};

export default TransactionItem;
