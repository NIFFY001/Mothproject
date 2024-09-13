import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SliderHero from "../../components/SliderHero";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[50%]">
          <SliderHero />
        </div>
        <div className="md:w-[50%] bg-white">
          <div className="">
            <p className="">
              <div className="bg-white flex items-center justify-center mt-28 md:mt-28">
                <div className="flex flex-col w-full p-5 md:p-20">
                  <div className="">
                    <h1 className="text-black mb-5">Login</h1>
                    <p className="text-black">
                      Welcome back, Please enter your details
                    </p>
                  </div>

                  <form action="" className="w-full mt-10">
                    <div className="mb-5 ">
                      <p className="mb-2">Email Address</p>
                      <input
                        placeholder="Email"
                        type="email"
                        className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                      />
                    </div>
                    <div className="mb-5">
                      <p className="mb-2">Password</p>
                      <input
                        placeholder="Password"
                        type="password"
                        className="bg-transparent w-full text-[16px] font-medium p-3 border-[1px] border-[#CCCCCC] rounded-xl"
                      />
                    </div>

                    <p className="text-[#007AFF] mb-10">Forgot Password?</p>

                    <Link to="/">
                      <button
                        type="submit"
                        className="bg-black text-white font-medium py-3 px-4  shadow-md w-full rounded-xl"
                      >
                        Sign In
                      </button>
                    </Link>
                  </form>
                  <div className="flex flex-col text-center ">
                    <p className="mt-5 font-[300] flex gap-1">
                      Are you a new user?{" "}
                      <p className="text-[#007AFF]">
                        {" "}
                        <Link to="/signup">Create your account</Link>
                      </p>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
