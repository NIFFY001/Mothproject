import React, { useState } from "react";
import SliderHero from "../../components/SliderHero";
import ProgressBar from "../../components/ProgressBar";
import Select from "react-select";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";

const countries = [
  { value: "nigeria", label: "Nigeria", flag: "NG" },
  { value: "usa", label: "United States", flag: "US" },
  { value: "canada", label: "Canada", flag: "CA" },
  // Add more countries as needed
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

export default function Signup() {
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 25, 100)); // Increase progress by 25%, max 100%
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[50%]">
          <SliderHero />
        </div>
        <div className="md:w-[50%] bg-white">
          <div className="flex items-center justify-center mt-28 md:mt-28">
            <div className="flex flex-col w-full p-5 md:p-20">
              <div>
                <h1 className="text-black mb-5">Sign up</h1>
                <p className="text-black">
                  Let's get started, please enter your details
                </p>
              </div>

              <ProgressBar progress={progress} />

              <form action="" className="w-full mt-10">
                <div className="mb-5">
                  <p className="mb-2">First Name</p>
                  <input
                    placeholder="Enter first name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2">Middle Name (Optional)</p>
                  <input
                    placeholder="Enter middle name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2">Last Name </p>
                  <input
                    placeholder="Enter last name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Country Selector */}
                <p className="mb-2">Phone Number</p>
                <div className="mb-5 flex items-center border-[1px] border-[#CCCCCC] p-3 rounded-xl w-full">
                  <div className="flex items-center w-1/2 pr-2">
                    <Select
                      options={countries}
                      getOptionLabel={(option) => (
                        <div className="flex items-center">
                          <Flag
                            code={option.flag}
                            alt={option.label}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                          />
                          <span>{option.label}</span>
                        </div>
                      )}
                      components={{ SingleValue: customSingleValue }}
                      className="bg-transparent w-full text-[16px] font-medium"
                    />
                  </div>

                  <div className="flex items-center w-1/2 pl-2">
                    <input
                      placeholder="Enter phone number"
                      type="text"
                      className="bg-transparent w-full text-[16px] font-medium p-3 border-none"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <p className="mb-2">Password </p>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="">
                  <p className="text-black">At least:</p>
                  <div className="mt-5 flex flex-row gap-2 md:gap-4 w-full text-center">
                    <div className=" rounded-full bg-[#EEDDFC] p-1 md:p-3 ">
                      <p className="text-[10px] "> 8 characters</p>
                    </div>
                    <div className="rounded-full bg-[#EEDDFC] p-1 md:p-3">
                      <p className="text-[10px]"> An uppercase letter </p>
                    </div>
                    <div className="rounded-full bg-[#EEDDFC] p-1 md:p-3">
                      <p className="text-[10px]"> A lowercase letter </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row gap-2 md:gap-4 text-center">
                    <div className="rounded-full bg-[#EEDDFC] p-1 md:p-3">
                      <p className="text-[10px]"> A special character </p>
                    </div>
                    <div className="rounded-full bg-[#EEDDFC] p-1  md:p-3">
                      <p className="text-[10px]"> A number </p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-row items-start md:items-center gap-2">
                    <input
                      className="h-4 w-4 rounded-full"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="text-black text-center text-[10px]">
                      I agree to the{" "}
                      <span className="text-[#005BFE]">Terms of Service</span>{" "}
                      and <span className="text-[#005BFE]">Privacy Policy</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  >
                    Next
                  </button>
                  <p className="text-black mt-10 text-center text-sm">
                    Already have an account?{" "}
                    <span className="text-[#005BFE]">
                      <Link to="/">Log in</Link>
                    </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
