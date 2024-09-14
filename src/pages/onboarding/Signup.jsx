import React from "react";
import SliderHero from "../../components/SliderHero";
import ProgressBar from "../../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom"; // Added Link and useNavigate from react-router-dom
import Select from "react-select"; // Import react-select for the country dropdown
import Flag from "react-world-flags"; // Assuming you have a flag component for country flags

// Example country data, replace this with actual data if necessary
const countries = [
  { label: "Nigeria", value: "+234", flag: "NG" },
  { label: "United States", value: "+1", flag: "US" },
];

export default function Signup() {
  const navigate = useNavigate();

  const handleNext = () => {
    // After completing this form, navigate to the OTP page
    navigate("/otp");
  };

  // Custom rendering for country options with flag
  const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      <Flag
        code={data.flag}
        alt={data.label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <span>{data.label}</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <SliderHero />
        </div>
        <div className="md:w-[50%] bg-white">
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-full p-5 md:p-20">
              <div>
                <h1 className="text-black mb-5 ">Sign up</h1>
                <p className="text-black">
                  Let's get started, please enter your details
                </p>
              </div>

              {/* Progress Bar */}
              <ProgressBar step={1} />

              {/* Form Content */}
              <form className="w-full mt-10">
                <div className="mb-5">
                  <p className="mb-2 text-sm">First Name</p>
                  <input
                    placeholder="Enter first name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-sm">Middle Name (Optional)</p>
                  <input
                    placeholder="Enter middle name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-sm">Last Name</p>
                  <input
                    placeholder="Enter last name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Country Selector and Phone Number */}
                <p className="mb-2 text-sm">Phone Number</p>
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
                  <p className="mb-2 text-sm">Password </p>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Password Requirements */}
                <div className="">
                  <p className="text-black text-sm">At least:</p>
                  <div className="mt-5 flex flex-row gap-2 md:gap-4 w-full text-center">
                    <div className="rounded-full bg-[#EEDDFC] p-1 md:p-3 ">
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
                    <div className="rounded-full bg-[#EEDDFC] p-1 md:p-3">
                      <p className="text-[10px]"> A number </p>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
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

                  {/* Next Button */}
                  <button
                    type="button"
                    className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                    onClick={handleNext}
                  >
                    Next
                  </button>

                  {/* Login Prompt */}
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
