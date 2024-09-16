import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import mothlogo from "/src/assets/mothlogo.png";
import { Link } from "react-router-dom";
import notification from "/src/assets/notification.png";
import colorednotification from "/src/assets/colorednotification.png";
import atm from "/src/assets/atm.png";
import mothbusiness from "/src/assets/mothbusiness.png";
import google from "/src/assets/google.png";
import apple from "/src/assets/apple.png";

const LeftSideTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSideOpen, setIsRightSideOpen] = useState(false); // For right sidebar (mobile)
  const [activeRightContent, setActiveRightContent] = useState(null); // For right content

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false); // Close menu on tab click (mobile)
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRightContentClick = (content) => {
    setActiveRightContent(content);
    setIsRightSideOpen(true); // Open right content
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const closeRightContent = () => {
    setIsRightSideOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Navbar - Left Side */}
      <div className="w-full md:w-[20%] bg-black text-white relative">
        {/* Logo for all screen sizes */}
        <Link to="">
          <div className="hidden md:flex px-4 py-6 items-center">
            <img src={mothlogo} alt="Logo" className="w-[30px] h-[30px]" />
          </div>
        </Link>

        {/* Hamburger and Logo for Mobile */}
        <Link to="">
          <div className="md:hidden flex justify-between items-center px-4 py-4">
            <img src={mothlogo} alt="Logo" className="w-[30px] h-[30px]" />
            <button className="text-white text-3xl" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </Link>

        {/* Tabs for Desktop & Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block md:static absolute top-0 left-0 w-full md:w-auto bg-black z-10 h-[calc(100vh-60px)] md:h-auto`} // Adjusted height for mobile
        >
          {tabs.map((tab, index) => (
            <div key={index} className="flex flex-col mb-5 py-2">
              <button
                className={`py-4 px-6 text-left transition-colors ${
                  activeTab === tab.name
                    ? "bg-slate-500 rounded-xl w-[150px] shadow font-bold"
                    : ""
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                {tab.name}
              </button>
            </div>
          ))}
          {/* Option for Third Content - Mobile Only */}
          <div className="flex flex-col mb-5 md:hidden">
            <button
              className="py-4 px-6 text-left transition-colors text-gray-400"
              onClick={() => handleRightContentClick("thirdContent")}
            >
              Notification
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full md:w-[55%] md:p-8 p-2 overflow-auto h-screen">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && <div key={tab.name}>{tab.content}</div>
        )}
      </div>

      {/* Right Section - Mobile View (Sliding Panel for third content) */}
      <div
        className={`fixed md:hidden top-0 right-0 w-[70%] h-[calc(100vh-60px)] bg-gray-100 p-2 transform transition-transform duration-300 ease-in-out overflow-y-scroll ${
          isRightSideOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onMouseLeave={closeRightContent} // Auto-close when mouse leaves
      >
        {activeRightContent === "thirdContent" && (
          <>
            <div className="px-1">
              <div className="flex">
                <img src={notification} className="ml-auto w-6 h-6"></img>
              </div>

              <div className=" mb-20">
                <h1 className="text-[#6C6C70] text-sm mb-2">Today</h1>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8">
                    <img src={colorednotification} alt="notification" />
                  </div>
                  <div className="">
                    <p className="text-sm">Amara Ayana requested $500</p>
                    <p className="text-[#6C6C70] text-sm mb-3">
                      July 06 at 8:00pm
                    </p>
                    <div className="border-b-2 w-full ]"></div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8">
                    <img src={colorednotification} alt="notification" />
                  </div>
                  <div>
                    <p className="text-sm">Moth Finance</p>

                    <p className="text-[#6C6C70] text-sm mb-4">
                      July 06 at 8:00pm
                    </p>
                    <div className="border-b-2 w-[200px] ]"></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img src={colorednotification} alt="notification" />
                  </div>
                  <div>
                    <p className="text-sm">KYC Document Updated</p>
                    <p className="text-[#6C6C70] text-sm mb-4">
                      July 06 at 8:00pm
                    </p>
                    <div className="border-b-2 w-[200px] ]"></div>
                  </div>
                </div>
              </div>

              <div className="mb-5 px-2">
                <img src={atm} alt="atm image" />
              </div>

              <div className="mb-5 px-2">
                <img src={mothbusiness} alt="business image" />
              </div>

              <div className="flex justify-around px-2">
                <img src={google} className="w-[100px]" alt="google" />
                <img src={apple} className="w-[100px]" alt="apple" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Section for Desktop (md and above) */}
      <div className="hidden md:block w-[25%] bg-[#F6F6F6] overflow-auto h-screen">
        <div className="px-4">
          <div className="flex">
            <img src={notification} className="ml-auto"></img>
          </div>

          <div className=" p-3 mb-20 bg-white rounded-xl ">
            <h1 className="text-[#6C6C70]  text-sm mb-2">Today</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <img src={colorednotification}></img>
              </div>
              <div className="">
                <p className="text-sm">Amara Ayana requested $500</p>
                <p className="text-[#6C6C70] text-sm mb-4">July 06 at 8:00pm</p>
                <div className="border-b-2 w-[270px] ]"></div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <img src={colorednotification}></img>
              </div>
              <div className="">
                <p className="text-sm">Moth Finance</p>
                <p className="text-sm">
                  Mastarcard funding is back online.You can..
                </p>
                <p className="text-[#6C6C70] text-sm mb-4">July 06 at 8:00pm</p>
                <div className="border-b-2 w-full ]"></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="">
                <img src={colorednotification}></img>
              </div>
              <div className="">
                <p className="text-sm">KYC Document Updated</p>

                <p className="text-[#6C6C70] text-sm mb-4">July 06 at 8:00pm</p>
                <div className="border-b-2 w-[260px] ]"></div>
              </div>
            </div>
          </div>
          <div className="mb-5 px-2">
            <img src={atm}></img>
          </div>

          <div className="mb-5 px-2">
            <img src={mothbusiness}></img>
          </div>

          <div className="flex justify-around px-2">
            <img src={google} className="w-[150px]"></img>
            <img src={apple} className="w-[150px]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideTab;
