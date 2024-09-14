import React, { useRef } from "react";
import SliderHero from "../../components/SliderHero";
import ProgressBar from "../../components/ProgressBar";

export default function Otp() {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <SliderHero />
        </div>
        <div className="md:w-[50%] bg-white p-5 md:p-20">
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-full">
              <div>
                <h1 className="text-black mb-5">Verify your email</h1>
                <p className="text-black">
                  Please enter the OTP sent to your email
                </p>
              </div>
              <div className="mb-10">
                <ProgressBar step={2} />
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-[200px]">
            <div className="flex space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[#6C6C70] text-black bg-transparent focus:outline-none rounded-lg"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl"
            >
              Verify Account
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="text-black font-medium py-3 px-4 border border-[#000000] shadow-md w-full rounded-xl"
            >
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
