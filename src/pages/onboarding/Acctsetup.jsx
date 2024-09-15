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

export default function Acctsetup() {
  const navigate = useNavigate();

  const handleNext = () => {
    // After completing this form, navigate to the OTP page
    navigate("/otp");
  };

  const handleForward = () => {
    // After completing this form, navigate to the Dashboard page
    navigate("/dashboard");
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
                <h1 className="text-black mb-5">Finish your account setup</h1>
                <p className="text-black">
                  Complete your account setup to enable you perform transactions
                  on Moth{" "}
                </p>
              </div>

              {/* Progress Bar */}
              <ProgressBar step={3} />

              {/* Form Content */}
              <form className="w-full mt-10">
                <div className="mb-5">
                  <p className="mb-2 text-sm">Home Address</p>
                  <input
                    placeholder="Enter your current home address"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-sm">Country</p>

                  <select className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl">
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="kenya">Kenya</option>
                    <option value="south-africa">South Africa</option>
                    <option value="egypt">Egypt</option>
                    <option value="canada">Canada</option>
                    <option value="united-states">United States</option>
                    <option value="united-kingdom">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                  </select>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Country</p>
                  <select className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl">
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    <option value="nigeria">🇳🇬 Nigeria</option>
                    <option value="ghana">🇬🇭 Ghana</option>
                    <option value="kenya">🇰🇪 Kenya</option>
                    <option value="south-africa">🇿🇦 South Africa</option>
                    <option value="egypt">🇪🇬 Egypt</option>
                    <option value="canada">🇨🇦 Canada</option>
                    <option value="united-states">🇺🇸 United States</option>
                    <option value="united-kingdom">🇬🇧 United Kingdom</option>
                    <option value="germany">🇩🇪 Germany</option>
                    <option value="france">🇫🇷 France</option>
                  </select>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">State</p>
                  <input
                    placeholder="Enter your state"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">City</p>
                  <input
                    placeholder="Enter your city"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Zip Code</p>
                  <input
                    placeholder="Enter Zip code"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">
                    Upload ID (.pdf, .png, .jpg, .jpeg){" "}
                  </p>
                  <input
                    type="file"
                    accept=".pdf, .png, .jpg, .jpeg"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                  <div className="text-black mt-3">
                    <p className="bg-[#EEDDFC] md:w-[430px]  px-3 py-1 rounded-xl text-sm">
                      Passport, National ID , Driver's Lincence or Voter's Card
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">
                    Upload Utility Bill (.pdf, .png, .jpg, .jpeg){" "}
                  </p>
                  <input
                    type="file"
                    accept=".pdf, .png, .jpg, .jpeg"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                  <div className="text-black mt-3">
                    <p className="bg-[#EEDDFC] md:w-[430px] px-3 py-1 rounded-xl text-sm">
                      Kindly provide a utility bill thats within the past 3
                      months
                    </p>
                  </div>

                  <div className="text-black mt-3">
                    <p className="bg-[#F2F0E0] md:w-[230px] px-3 py-1 rounded-xl text-sm">
                      Max size for upload is 3MB
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Date Of Birth</p>
                  <input
                    placeholder="select a file to upload"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Gender</p>

                  <select className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl">
                    <option value="" disabled selected className="text-grey">
                      Select a Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer not to say">Prefer Not To Say</option>
                  </select>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Occupation</p>
                  <input
                    placeholder="Enter your Occupation"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2">Password </p>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-sm">Purpose for signing up on Moth</p>

                  <select className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl">
                    <option value="" disabled selected className="text-grey">
                      Reasons
                    </option>
                    <option value="male">Receive International Payments</option>
                  </select>
                </div>
              </form>

              <button
                type="button"
                className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                onClick={handleForward}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
